var webpackConfig = require('./webpack.config.js');

/*
 * Karma config
 *
 * Configuration file for test runner
 */

module.exports = function (config) {
  config.set({
    browsers                 : [ 'PhantomJS' ],
    captureTimeout           : 60000,
    browserNoActivityTimeout : 60000, // We need to accept that Webpack may take a while to build!
    singleRun                : true,
    colors                   : true,
    frameworks               : [ 'mocha', 'chai' ], // Mocha is our testing framework of choice
    files                    : [
      'webpack/tests.js'
    ],
    preprocessors : {
      'webpack/tests.js' : [ 'webpack' ] // Preprocess with webpack and our sourcemap loader
    },
    reporters : [ 'mocha' ],
    webpack   : { // Simplified Webpack configuration
      module : {
        loaders : webpackConfig.module.loaders
      },
      node : {
        fs : 'empty'
      }
    },
    webpackServer : {
      noInfo : true // We don't want webpack output
    }
  });
};