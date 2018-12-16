// const fs = require("fs");
// const path = require(" path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRC_DIR = __dirname + '/src';
const DIST_DIR = __dirname + '/build';

module.exports = {
  entry: [
    SRC_DIR + '/index.tsx'
  ],
  output: {
    path: DIST_DIR,
    filename: 'bundle.min.js'
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // exclude: /node_modules/,
        use:  ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(sass|css)$/,
        // exclude: /node_modules/,
        use:  ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("./style/style.css"),
  ]
};