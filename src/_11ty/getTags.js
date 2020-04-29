const slugify = require('./_utils/slugify');
const fs = require('fs');

module.exports = function (collection) {
  let tagsCollection = new Map();
  let max = 0;

  collection.getAll().forEach(function (item) {
    if ('tags' in item.data) {
      for (const tag of item.data.tags) {
        let number = (tagsCollection.get(tag) || 0) + 1;
        max = Math.max(max, number);
        tagsCollection.set(tag, number);
      }
    }
  });

  // We assume there is at least one tag with only one content
  const minLog = Math.log(1);
  const maxLog = Math.log(max);

  const tags = [];
  tagsCollection.forEach((number, tag) => {
    let factor = (Math.log(number) - minLog) / (maxLog - minLog);
    let tagSlug = slugify(tag, {
      decamelize: false,
      customReplacements: [['%', ' ']],
    });

    let newTag = {
      tag: tag,
      slug: tagSlug,
      number: number,
      factor: factor,
      step: Math.ceil(factor * 2) + 1,
    };

    let tagLogoPath = `assets/logos/${tagSlug}.png`;
    if (fs.existsSync(`src/${tagLogoPath}`)) {
      newTag.logo = tagLogoPath;
    }

    let tagContentPath = `src/tags/${tagSlug}.md`;
    if (fs.existsSync(tagContentPath)) {
      newTag.description = fs.readFileSync(tagContentPath, {
        encoding: 'utf8',
      });
    }

    tags.push(newTag);
  });

  tags.sort((a, b) => {
    return a.tag.localeCompare(b.tag, 'en', { ignorePunctuation: true });
  });

  return tags;
};
