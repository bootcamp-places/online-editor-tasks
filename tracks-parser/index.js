import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import {
  getDirs,
  readFilesFromDir,
  createOrUpdateTask,
  createOrUpdateTrack
} from './utils/index.js';

const parseTracksAndSaveToDB = async () => {
  const __dirname = path.resolve();
  const tracksPath = path.join(__dirname, '..', 'src', 'repo', 'tracks');
  const tracksDirs = await getDirs(tracksPath);

  for (const trackDir of tracksDirs) {
    const tasksDirs = await getDirs(path.join(tracksPath, trackDir));
    const trackData = {
      trackId: trackDir,
      title: trackDir,
      description: trackDir,
      tasks: []
    };

    for (const taskDir of tasksDirs) {
      const [order, taskName] = taskDir.split('-');
      const filesContent = await readFilesFromDir(path.join(tracksPath, trackDir, taskDir));
      const taskData = {
        order,
        trackId: trackDir,
        taskName,
        taskId: `${trackDir}-${taskName}`,
        ...filesContent
      };
      const task = await createOrUpdateTask(taskData);

      trackData.tasks.push(task._id);
    }

    await createOrUpdateTrack(trackData);
  }
};

const runParser = () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, async error => {
      if (error) {
        throw error;
      }

      await parseTracksAndSaveToDB();
      console.log('TRACKS SUCCESSFULLY PARSED');
      mongoose.connection.close();
    });
  } catch (error) {
    console.log(error);
  }
};

runParser();
