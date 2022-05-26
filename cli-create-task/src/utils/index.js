const fs = require('fs').promises;
const path = require('path');

const basicDir = 'tracks';

const getDirs = async (dirPath = '') => {
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

const transformToTaskStructure = (arr = []) => {
  const result = {};

  for (const item of arr) {
    const [order, id] = item.split('-');

    result[id] = {
      id,
      order
    };
  }

  return result;
};

const getTracksList = async () => {
  const tracksList = {};
  const tracksDirs = await getDirs(basicDir);

  for (const taskDir of tracksDirs) {
    const arr = await getDirs(`${basicDir}/${taskDir}`);

    tracksList[taskDir] = transformToTaskStructure(arr);
  }

  return tracksList;
};

const getTaskNextOrder = (track = {}) => {
  const lastTaskId = getLastTaskId(track);
  const lastTaskOrder = track[lastTaskId].order;

  return increaseOrder(lastTaskOrder);
};

const increaseOrder = order => {
  const step = 0.01;
  const nextOrder = order / 100 + step;

  return nextOrder.toFixed(2).split('.')[1];
};

const getLastTaskId = (track = []) => {
  const sortedTasks = Object.keys(track).sort((task1, task2) => {
    return track[task2].order - track[task1].order;
  });

  const [firstTask = {}] = sortedTasks;

  return firstTask;
};

const getTaskPath = (tracksList, trackName, taskName) => {
  const currentTrack = tracksList[trackName] || [];

  const tasksNames = Object.keys(currentTrack);
  const order = tasksNames.length === 0 ? '01' : getTaskNextOrder(currentTrack)

  return `${basicDir}/${trackName}/${order}-${taskName}`;
};

exports.getTracksList = getTracksList;
exports.getTaskPath = getTaskPath;
