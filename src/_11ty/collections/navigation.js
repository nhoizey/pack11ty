// Add a "navigation" collection with all auto collection homepages
module.exports = {
  navigation: (collection) =>
    collection
      .getAll()
      .filter((item) => 'nav' in item.data && 'order' in item.data.nav)
      .sort(
        (a, b) =>
          parseInt(a.data.nav.order, 10) - parseInt(b.data.nav.order, 10)
      ),
};
