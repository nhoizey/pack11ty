module.exports = {
  split: (string, separator) => {
    return string.split(separator);
  },
  length: (array) => {
    return !array ? 0 : array.length;
  },
  limit: (array, limit) => {
    return array.slice(0, limit);
  },
  offset: (array, offset) => {
    return array.slice(offset);
  },
  uniq: (array) => {
    return [...new Set(array)];
  },
};
