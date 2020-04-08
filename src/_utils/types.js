const fs = require('fs');
const contentTypes = [];

const getContentTypes = () => {
  fs.readdirSync('./src/content', {
    encoding: 'utf8',
    withFileTypes: true,
  }).forEach((item) => {
    if (item.isDirectory()) {
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
