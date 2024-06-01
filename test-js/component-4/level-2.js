const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready-2-1.js',
    'urlParameters': '',
    selectors: ['#slider-2'],
  },
  {
    onReadyScript: 'onready-2-2.js',
    'urlParameters': '',
    selectors: ['#slider-2'],
  },
], 2);
