const inquirer = require('inquirer');
const { searchList } = require('./inquirer-search-list');

inquirer.registerPrompt('search-list', searchList);

const log = answer => {
  const [name, value] = Object.entries(answer)[0];

  console.log(`${name}:\x1b[36m "${value}"\x1b[0m`);
};

const createTrackName = async (tracksNames = []) => {
  const answer = await inquirer
    .prompt([
      {
        type: 'search-list',
        message: 'Create new track or select existed',
        name: 'trackName',
        choices: tracksNames.map(dir => ({name: dir, value: dir })),
        default: 'trackName'
      }
    ]);

  log(answer);

  return answer;
};

const createTaskName = async () => {
  const answer = await inquirer
    .prompt([
      {
        type: 'input',
        name: 'taskName',
        message: 'Input task name (use "camelCase" 🐫)',
        default: 'taskName'
      },
    ]);

  log(answer);

  return answer;
};

const prompt = async (tracksNames = []) => {
  const { trackName } = await createTrackName(tracksNames);
  const { taskName } = await createTaskName();

  return [trackName, taskName];
};

exports.prompt = prompt;
