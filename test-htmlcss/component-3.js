const getConfig = require('./default');

module.exports = getConfig('events', [
  {
    misMatchThreshold: 0.7,
    viewports: ['desktop', 'mobile'],
  },
  {
    misMatchThreshold: 1,
    viewports: ['tablet'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 0.7,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 0.7,
    viewports: ['desktop'],
  }
]);
