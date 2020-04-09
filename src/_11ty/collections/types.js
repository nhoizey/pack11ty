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
}

module.exports = collections;
