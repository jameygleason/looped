const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/rescale-carousel.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'Rescale-carousel',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
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
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-modules-commonjs'],
        },
      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
  ],
};