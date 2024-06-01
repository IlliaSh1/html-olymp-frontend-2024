const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=0',
    clickSelectors: [
      '.slider-pagination li:nth-child(2) button'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=0',
    clickSelectors: [
      '.slider-pagination li:nth-child(3) button',
      '.slider-pagination li:nth-child(1) button'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=0',
    clickSelectors: [
      '.slider-pagination li:nth-child(3) button',
      '.slider-toggle--prev',
      '.slider-toggle--prev'
    ]
  }
], 2);
