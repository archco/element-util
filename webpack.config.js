const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const jsRule = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['env'],
    },
  },
};

const Library = {
  entry: './lib/element-util.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-util.js',
    library: 'ElementUtil',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
};

const Minify = {
  entry: './lib/element-util.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-util.min.js',
    library: 'ElementUtil',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
  plugins: [new UglifyJsPlugin()],
};

const Mod = {
  entry: './lib/element-util.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-util.mod.js',
  },
  module: {
    rules: [
      jsRule,
    ],
  },
};

module.exports = [Library, Minify, Mod];
