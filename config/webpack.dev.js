const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const mode = 'development';

const entry = path.resolve(__dirname, '../src/rescale-carousel.js');

const output = {
  path: path.join(__dirname, '../dist'),
  filename: 'rescale-carousel.min.js',
  library: 'Rescale Carousel',
  libraryTarget: 'umd',
  umdNamedDefine: true,
};

const plugins = [
  new UglifyJSPlugin({
    sourceMap: true,
  }),
  new webpack.SourceMapDevToolPlugin({
    exclude: path.resolve(__dirname, '../node_modules'),
  }),
];

module.exports = {
  mode,
  entry,
  output,
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['babel-plugin-add-module-exports'],
        },
      },
    ],
  },
  plugins,
  devtool: 'cheap-eval-source-map',
};
