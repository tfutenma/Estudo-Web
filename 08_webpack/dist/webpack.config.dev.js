"use strict";

var modoDev = process.env.NODE_ENV !== 'production';

var webpack = require('webpack');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // const TerserPlugin = require('terser-webpack-plugin')


var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: {
    filename: 'principal.js',
    path: __dirname + '/public'
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
      parallel: true
    }), new OptimizeCssAssetsPlugin({})]
  },
  plugins: [// new TerserPlugin({
  //       parallel: true,
  //       terserOptions: {
  //             ecma: 6,
  //       },
  // }),
  new MiniCssExtractPlugin({
    filename: "estilo.css"
  })],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [MiniCssExtractPlugin.loader, // 'style-loader',
      'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|gif|jpeg)$/,
      use: ['file-loader']
    }]
  }
};