const slugifyString = require('../../_utils/slugify');

module.exports = {
  base64: (string) => {
    return Buffer.from(string).toString('base64');
  },
  slugify: (string) => slugifyString(string),
  tagToHashtag: (tag) => {
    let words = tag.replace(/-/, ' ').split(' ');
    return (
      words[0] +
      words
        .slice(1)
        .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
        .join('')
    );
  },
};
