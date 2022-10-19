import fs from 'fs/promises';
import path from 'path';

import { TrackModel } from '../models/track.model.js';
import { TaskModel } from '../models/task.model.js';

const TASK_FIELDS_BY_FILES_NAMES = {
  'index.js': 'index',
  'index.spec.js': 'spec',
  'readme.md': 'readme',
  'solution/index.js': 'solution',
  'solution/readme.md': 'solutionReadme'
};

export const getDirs = async (dirPath = '') => {
  const list = await fs.readdir(dirPath);
  const dirs = [];

  for (const listItem of list) {
    const itemPath = path.join(dirPath, listItem);
    const stats = await fs.stat(itemPath);

    if (stats.isDirectory()) {
      dirs.push(listItem);
    }
  }

  return dirs;
};

export const readFilesFromDir = async dirPath => {
  const list = await fs.readdir(dirPath);
  const filesContent = {};

  const doStep = async (filesList, dirName) => {
    if (!filesList.length) return;

    for (const item of filesList) {
      const paths = dirName ? [dirPath, dirName, item] : [dirPath, item];
      const itemPath = path.join(...paths);
      const stats = await fs.stat(itemPath);

      if (stats.isDirectory()) {
        const dirList = await fs.readdir(itemPath);

        await doStep(dirList, item);
      } else {
        const key = TASK_FIELDS_BY_FILES_NAMES[dirName ? `${dirName}/${item}` : item];

        if (key) {
          filesContent[key] = await fs.readFile(itemPath, 'utf-8');
        }
      }
    }
  };

  await doStep(list);

  return filesContent;
};

export const createOrUpdateTask = async taskData => {
  const updatedTask = await TaskModel.findOneAndUpdate({ taskId: taskData.taskId }, taskData);

  if (updatedTask) {
    return updatedTask;
  } else {
    const task = new TaskModel({ ...taskData });

    return await task.save();
  }
};

export const createOrUpdateTrack = async trackData => {
  const updatedTrack = await TrackModel.findOneAndUpdate({ trackId: trackData.trackId }, trackData);

  if (updatedTrack) {
    return updatedTrack;
  } else {
    const track = new TrackModel({ ...trackData });

    return await track.save();
  }
};
