/**
 * 
 * @authors purelite (zhuweilei@weidian.com)
 * @date    2017-11-05 17:51:21
 * @version $Id$
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ]
  }
}