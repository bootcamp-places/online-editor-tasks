const searchList = require('inquirer-search-list');

// NOTE: dirty hack
searchList.prototype.getCurrentValue = function (...props) {
  if (this.filterList.length) {
    return this.filterList[this.pointer].value;
  }
  else {
    return props[0];
  }
};

exports.searchList = searchList;
