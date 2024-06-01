const getConfig = require('./default');

module.exports = getConfig('header', [
  {
    misMatchThreshold: 0.7,
    viewports: ['desktop', 'tablet'],
  },
  {
    misMatchThreshold: 0.3,
    viewports: ['mobile'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop', 'mobile']
  }
]);
