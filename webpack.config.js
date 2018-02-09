const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  devtool: 'inline-source-map',
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
    ],
  },
  output: {
    path: __dirname + '/client',
    filename: 'bundle.js'
  }
};