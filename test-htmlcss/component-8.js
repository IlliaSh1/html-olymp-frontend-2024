const getConfig = require('./default');

module.exports = getConfig('contacts', [
  {
    misMatchThreshold: 1,
    viewports: ['desktop']
  },
  {
    misMatchThreshold: 1.5,
    viewports: ['tablet', 'mobile']
  },
  {
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop']
  },
  {
    type: 'underflow',
    misMatchThreshold: 1,
    viewports: ['tablet']
  }
]);
