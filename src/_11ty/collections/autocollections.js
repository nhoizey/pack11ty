const getFilteredCollection = require('../_utils/filter-collection');
const folders = require('../_utils/folders');
const collections = {};

folders.forEach((folder) => {
  // Add a collection for each autocollection folder
  collections[folder] = (collection) =>
    getFilteredCollection(collection, folder);
});

if (folders.length > 0) {
  // Add a global collection with all autocollection folders
  collections['contents'] = (collection) =>
    getFilteredCollection(collection, `{${folders.join(',')}}`);
}

module.exports = collections;
