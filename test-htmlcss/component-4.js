const getConfig = require('./default');

module.exports = getConfig('form', [
  {
    misMatchThreshold: 1,
  },
  {
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 0.7,
    viewports: ['mobile'],
  }
]);
