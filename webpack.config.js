const path = require('path');
const merge = require('webpack-merge');
const WebpackNotifierPlugin = require('webpack-notifier');

const dev = {
  entry: './src/element-util.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'element-util.js',
    library: 'ElementUtil',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  devtool: 'source-map',
};

const min = merge(dev, {
  output: {
    filename: 'element-util.min.js',
  },
  optimization: {
    minimize: true,
  },
  devtool: false,
  plugins: [
    new WebpackNotifierPlugin({
      title: 'Webpack',
      alwaysNotify: true,
      sound: false,
    }),
  ],
});

module.exports = [dev, min];
