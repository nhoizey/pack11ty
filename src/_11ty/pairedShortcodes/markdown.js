const markdownIt = require('markdown-it');

module.exports = {
  markdown: (content, inline = null) => {
    return inline
      ? markdownIt.renderInline(content)
      : markdownIt.render(content);
  },
};
