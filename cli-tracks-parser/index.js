import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

dotenv.config({ path: path.join(__dirname, ".env") });

import {
  getDirs,
  readFilesFromDir,
  createOrUpdateTask,
  createOrUpdateTrack,
} from "./src/utils/index.js";

const parseTracksAndSaveToDB = async () => {
  const tracksPath = path.join(__dirname, "..", "tracks");
  const tracksDirs = await getDirs(tracksPath);

  for (const trackDir of tracksDirs) {
    const tasksDirs = await getDirs(path.join(tracksPath, trackDir));
    const trackData = {
      trackId: trackDir,
      title: trackDir,
      description: trackDir,
      tasks: [],
    };

    for (const taskDir of tasksDirs) {
      const [order, taskName] = taskDir.split("-");
      const filesContent = await readFilesFromDir(
        path.join(tracksPath, trackDir, taskDir),
      );
      const taskData = {
        order,
        trackId: trackDir,
        taskName,
        taskId: `${trackDir}-${taskName}`,
        ...filesContent,
      };
      const task = await createOrUpdateTask(taskData);

      trackData.tasks.push(task._id);
    }

    await createOrUpdateTrack(trackData);
  }
};

const run = () => {
  try {
    console.error("process.env.MONGODB_URL", process.env.MONGODB_URL);

    mongoose.connect(process.env.MONGODB_URL, async (error) => {
      if (error) {
        throw error;
      }

      await parseTracksAndSaveToDB();
      console.log("TRACKS SUCCESSFULLY PARSED");
      mongoose.connection.close();
    });
  } catch (error) {
    console.log(error);
  }
};

// run();
export default run;
