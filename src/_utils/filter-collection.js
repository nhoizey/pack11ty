let filteredCollectionsMemoization = {};
const getFilteredCollection = (collection, type) => {
  if (type in filteredCollectionsMemoization) {
    return filteredCollectionsMemoization[type];
  } else {
    let filteredCollection = collection
      .getFilteredByGlob(`src/${type}/**/*.md`)
      .sort((a, b) => b.date - a.date);
    if (process.env.NODE_ENV !== 'production') {
      filteredCollection = filteredCollection.slice(0, 10);
    }
    filteredCollectionsMemoization[type] = filteredCollection;

    return filteredCollection;
  }
};

module.exports = getFilteredCollection;
