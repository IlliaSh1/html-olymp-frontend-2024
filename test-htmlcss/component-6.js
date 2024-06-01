const getConfig = require('./default');

module.exports = getConfig('about', [
  {
    misMatchThreshold: 1,
    viewports: ['desktop', 'tablet'],
  },
  {
    misMatchThreshold: 2,
    viewports: ['mobile'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 1.7,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 1,
    viewports: ['desktop', 'tablet'],
  }
]);
