const { prompt } = require('./src/promt.js');
const { createTask } = require('./src/create-task.js');
const { getTracksList } = require('./src/utils/index.js');

const run = async () => {
  try {
    const tracksList = await getTracksList();
    const tracksNames = Object.keys(tracksList);

    const [trackName, taskName] = await prompt(tracksNames);
    const structure = await createTask(tracksList, trackName, taskName);

    console.error(`🚀 Task\x1b[36m "${taskName}"\x1b[0m was successfully created in\x1b[36m "${trackName}"\x1b[0m track`);
    console.log('\x1b[33m', structure, '\x1b[0m');
  } catch (error) {
    console.error(`Run error: `, error);
  }
};

exports.run = run;
