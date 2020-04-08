const moment = require('moment');

module.exports = {
  date: (date, format) => {
    return moment(date).format(format);
  },
  attributeDate: (date) => {
    return moment(date).format('YYYY-MM-DD');
  },
};
