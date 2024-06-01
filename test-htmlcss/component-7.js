const getConfig = require('./default');

module.exports = getConfig('gallery', [
  {
    misMatchThreshold: 0.5,
    viewports: ['desktop']
  },
  {
    misMatchThreshold: 1,
    viewports: ['tablet']
  },
  {
    misMatchThreshold: 0.7,
    viewports: ['mobile']
  },
  {
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop']
  }
]);
