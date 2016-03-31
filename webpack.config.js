"use strict";

const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');

module.exports = {
  // where our app lives
  context: __dirname+"/app/src",
  // if we are in debug mode (not production), have debug tools else have nothing
  devtool: debug ? "inline-sourcemap": null,
  // this is where we start off
  entry: "./js/client.js",
  // adding a loader
  module: {
    // anything that is a js file gets run through the babel loader with the exception of node modules and bower-components
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules | bower-components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    // output files into js directory
    path: __dirname + "/app/src/",
    // what to name to output file
    filename: "client.min.js"
  },
  // if debig mode, no plugins, if production, use the plugins below, such as removing duplicates and minifying
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
  ]

};
