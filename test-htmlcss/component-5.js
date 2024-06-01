const getConfig = require('./default');

module.exports = getConfig('learning', [
  {
    misMatchThreshold: 1.3,
    viewports: ['desktop']
  },
  {
    misMatchThreshold: 2.5,
    viewports: ['tablet']
  },
  {
    misMatchThreshold: 1.8,
    viewports: ['mobile']
  },
  {
    type: 'overflow',
    misMatchThreshold: 1.5,
    viewports: ['desktop']
  },
  {
    type: 'underflow',
    misMatchThreshold: 1,
    viewports: ['desktop', 'mobile']
  }
]);
