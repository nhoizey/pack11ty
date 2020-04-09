const fs = require('fs');
const contentTypes = [];

const getContentTypes = () => {
  fs.readdirSync('./src', {
    encoding: 'utf8',
    withFileTypes: true,
  }).forEach((item) => {
    if (item.isDirectory() && !item.name.match(/^_/)) {
      contentTypes.push(item.name);
    }
  });
};

module.exports = () => {
  if (contentTypes.length === 0) {
    getContentTypes();
  }
  return contentTypes;
};
