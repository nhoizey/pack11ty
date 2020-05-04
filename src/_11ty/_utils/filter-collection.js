const config = require('../../../pack11ty.config.js');

let filteredCollectionsMemoization = {};

const getFilteredCollection = (collection, folder) => {
  if (folder in filteredCollectionsMemoization) {
    // This collection already exists in memoization
    return filteredCollectionsMemoization[folder];
  } else {
    let filteredCollection = collection
      .getFilteredByGlob(`src/${folder}/**/*.md`)
      .filter((item) => !item.filePathStem.match(/^\/[^\/]+\/index$/))
      .sort((a, b) => b.date - a.date);

    if (
      process.env.NODE_ENV !== 'production' &&
      config.limitCollectionSizeInDevMode !== 0
    ) {
      // In development mode, keep only 10 items per collection for performance
      filteredCollection = filteredCollection.slice(
        0,
        config.limitCollectionSizeInDevMode
      );
    }

    // Keep a copy of this collection in memoization for later reuse
    filteredCollectionsMemoization[folder] = filteredCollection;

    return filteredCollection;
  }
};

module.exports = getFilteredCollection;
