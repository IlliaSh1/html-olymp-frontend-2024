const getConfig = require('./default');

module.exports = getConfig('footer', [
  {
    misMatchThreshold: 1,
    viewports: ['desktop', 'tablet']
  },
  {
    misMatchThreshold: 2,
    viewports: ['mobile']
  },
  {
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop']
  },
  {
    type: 'underflow',
    misMatchThreshold: 0.7,
    viewports: ['tablet']
  }
]);
