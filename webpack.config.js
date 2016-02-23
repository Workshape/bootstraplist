// Make sure to be on valid environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nib = require('nib');
var griddy = require('griddy');
var config = require('config');

/*
 * Webpack config
 *
 * Setup for build, watch and hotreload tasks
 */

const IS_DEV = (process.env.NODE_ENV === 'development'),
  APP_ENTRY = './client/app',
  ENV_PLUGIN = new webpack.DefinePlugin({ __DEV__: IS_DEV });

var entryScripts = [ APP_ENTRY ],
  output = {
    path     : path.join(__dirname, [ '/', config.get('buildDirectory') ].join('')),
    filename : 'bundle.js'
  },
  plugins = [
    ENV_PLUGIN,
    new ExtractTextPlugin('style.css'),
    new webpack.NoErrorsPlugin()
  ],
  loaders = [
    {
      test    : /\.md?$/,
      loaders : [ 'html', 'markdown' ],
      include : __dirname
    },
    {
      test    : /\.js?$/,
      loaders : [ 'babel' ],
      exclude : /node_modules/,
      include : __dirname
    },
    {
      test    : /\.json?$/,
      loaders : [ 'json' ],
      include : __dirname,
      exclude : /node_modules/
    },
    {
      test    : /\.css?$/,
      loaders : [ ExtractTextPlugin.extract('style-loader', 'css-loader'), 'raw' ],
      include : __dirname
    },
    {
      test    : /\.styl?$/,
      loader  : ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader'),
      include : __dirname
    },
    {
      test    : /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders : [ 'file' ]
    }
  ];

if (IS_DEV) {
  output.publicPath = 'http://localhost:3001/';
  plugins.push(new webpack.HotModuleReplacementPlugin());
  entryScripts = [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    APP_ENTRY
  ];

  loaders = [
    {
      test    : /\.md$/,
      loaders: [ 'raw', 'markdown' ],
      include : __dirname
    },
    {
      test    : /\.js$/,
      loaders : [ 'react-hot', 'babel' ],
      exclude : /node_modules/,
      include : __dirname
    },
    {
      test    : /\.json$/,
      loaders : [ 'json' ],
      include : __dirname,
      exclude : /node_modules/
    },
    {
      test    : /\.css$/,
      loaders : [ 'style-loader', 'css-loader' ],
      include : __dirname
    },
    {
      test    : /\.styl$/,
      loaders : [ 'style-loader', 'css-loader', 'stylus-loader' ],
      include : __dirname
    },
    {
      test   : /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader : 'file-loader'
    }
  ];
}

module.exports = {
  devtool : 'eval',
  entry   : entryScripts,
  output  : output,
  plugins : plugins,
  module  : {
    loaders : loaders
  },
  stylus : {
    use : [ nib(), griddy() ]
  }
};
