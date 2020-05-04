const fs = require('fs');
const config = require('../../../pack11ty.config.js');

const folders = [];

const getFolders = () => {
  fs.readdirSync(config.dir.src, {
    encoding: 'utf8',
    withFileTypes: true,
  }).forEach((item) => {
    if (item.isDirectory() && !item.name.match(/^_/)) {
      folders.push(item.name);
    }
  });
};

if (folders.length === 0) {
  getFolders();
}

module.exports = folders;
