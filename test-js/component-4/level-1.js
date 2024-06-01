const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready-1-1.js',
    'urlParameters': '',
    selectors: ['#slider-1'],
  },
  {
    onReadyScript: 'onready-1-2.js',
    'urlParameters': '',
    selectors: ['#slider-1'],
  },
], 1);
