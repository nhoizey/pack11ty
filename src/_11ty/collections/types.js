const getFilteredCollection = require('../../_utils/filter-collection');
const contentTypes = require('../../_utils/types')();
const collections = {};

contentTypes.forEach((type) => {
  collections[type.name] = (collection) =>
    getFilteredCollection(collection, type.name);
});
if (contentTypes.length > 0) {
  collections['contents'] = (collection) =>
    getFilteredCollection(collection, `{${contentTypes.join(',')}}`);
  // collections['types'] = (collection) =>
  //   getFilteredCollection(collection, `{${contentTypes.join(',')}}`).filter(
  //     (item) => {
  //       console.log(item.filePathStem);
  //       let matches = item.filePathStem.match(/^\/([^\/]+)\/index$/);
  //       console.dir(
  //         matches !== null && contentTypes.indexOf(matches[1]) !== -1
  //       );
  //       return matches !== null && contentTypes.indexOf(matches[1]) !== -1;
  //     }
  //   );
}

module.exports = collections;
