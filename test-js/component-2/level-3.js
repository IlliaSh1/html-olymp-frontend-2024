const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=1',
    clickSelectors: [
      '.slider-pagination li:nth-child(3) button',
      '.slider-toggle--next',
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=1',
    clickSelectors: [
      '.slider-toggle--prev',
      '.slider-toggle--prev'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=1&loop=1',
    clickSelectors: [
      '.slider-pagination li:nth-child(2) button',
      '.slider-toggle--prev',
      '.slider-toggle--prev'
    ]
  }
], 3);
