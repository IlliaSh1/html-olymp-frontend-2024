const getConfig = require('./default');

module.exports = getConfig('hero', [
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
    misMatchThreshold: 1.5,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 1.5,
    viewports: ['tablet'],
  }
]);
