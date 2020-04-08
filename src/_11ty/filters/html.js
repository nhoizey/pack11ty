const cheerio = require('cheerio');
const truncateHtml = require('truncate-html');

module.exports = {
  cleanDeepLinks: (content) => {
    const regex = / <a class="deeplink"((?!(<\/a>)).|\n)+<\/a>/gm;
    return content.replace(regex, '');
  },
  stripFootnotes: (content) => {
    // TODO: Use BasicHTML?
    const $ = cheerio.load(content);
    $(
      'a.footnote, a.footnotes, div.footnote, div.footnotes, sup.footnote, sup.footnotes'
    ).remove();
    return $.html();
  },
  excerpt: (content) => {
    if (content === undefined) {
      return '';
    }
    const regex = /(<p( [^>]*)?>((?!(<\/p>)).|\n)+<\/p>)/m;
    let excerpt = '';

    // Remove paragraphs containing only an image
    cleanContent = content.replace(/<p><img [^>]+><\/p>/, '');

    // Get first paragraph, if there's at least one, and remove the paragraph tag
    if ((matches = regex.exec(cleanContent)) !== null) {
      excerpt = matches[0].replace(
        /<p( [^>]*)?>(((?!(<\/p>)).|\n)+)<\/p>/,
        '$2'
      );
    }

    return excerpt;
  },
  absoluteImagePath: (content, url) => {
    let imagesAbsoluteUrl = content.replace(
      /<img src="([^"]+)"/,
      (correspondance, imagePath) => {
        if (!imagePath.match(/^(\/|https?:\/\/)/)) {
          return `<img src="${url}${imagePath}"`;
        }
      }
    );
    return imagesAbsoluteUrl;
  },
  removeImages: (html) => html.replace(/<img [^>]+>/, ''),
  truncateHtml: (html, length) => {
    return truncateHtml(html, length, {
      reserveLastWord: true,
      ellipsis: '…',
    });
  },
};
