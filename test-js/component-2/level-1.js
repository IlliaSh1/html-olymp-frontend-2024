const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=0&loop=0',
    removeSelectors: ['.slider-pagination'],
    clickSelectors: [
      '.slider-toggle--next'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=0&loop=0',
    removeSelectors: ['.slider-pagination'],
    clickSelectors: [
      '.slider-toggle--next',
      '.slider-toggle--prev'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?pagination=0&loop=0',
    removeSelectors: ['.slider-pagination'],
    clickSelectors: [
      '.slider-toggle--next',
      '.slider-toggle--next',
      '.slider-toggle--next'
    ]
  }
], 1);
