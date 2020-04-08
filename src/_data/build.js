const timestamp = new Date();

module.exports = {
  env: process.env,
  timestamp: timestamp,
  id: timestamp.valueOf(),
};
