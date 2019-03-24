const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const mode = 'production';

const entry = path.resolve(__dirname, '../src/rescale-carousel.js');

const output = {
  path: path.join(__dirname, '../dist'),
  filename: 'rescale-carousel.min.js',
  library: 'Rescale Carousel',
  libraryTarget: 'umd',
  umdNamedDefine: true,
};

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
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};
