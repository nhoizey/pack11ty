const pathToType = (inputPath) =>
  inputPath.replace(/^\.\/src\/content\/([^/]+)\/.*$/, '$1');

const type = (data) => {
  if (!data.pkg) {
    return '';
  }
  return pathToType(data.page.inputPath);
};

const permalink = (data) => {
  if (!data.pkg) {
    return '';
  }
  let permalinkBase = data.page.filePathStem.replace(/^\/content\//, '');
  if (type(data) === 'pages') {
    permalinkBase = permalinkBase.replace(/^pages\//, '');
  }
  return `${permalinkBase}.html`;
};

module.exports = {
  lang: 'en',
  eleventyComputed: {
    layout: (data) => type(data),
    permalink: (data) => permalink(data),
  },
};
