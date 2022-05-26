const fse = require('fs-extra');
const tree = require('tree-node-cli');

const getTaskTemplates = require('./templates/index.js');
const { getTaskPath } = require('./utils/index.js');

const createTask = async (tracksList, trackName, taskName) => {
  const taskPath = getTaskPath(tracksList, trackName, taskName);
  const templates = getTaskTemplates(taskPath, trackName, taskName);

  const promises = Object.keys(templates).map(templateKey => {
    return fse.outputFile(templateKey, templates[templateKey]);
  });

  await Promise.all(promises);

  return tree(taskPath, {
    allFiles: true,
    maxDepth: 2
  });
};

exports.createTask = createTask;
