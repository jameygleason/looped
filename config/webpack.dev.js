const webpack = require('webpack');
const path = require('path');

const mode = 'development';

const entry = {
  index: path.resolve(__dirname, '../src/index.js'),
};

const plugins = [
  new webpack.SourceMapDevToolPlugin({
    exclude: path.resolve(__dirname, '../node_modules'),
  }),
];

const modules = {
  rules: [
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
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
};

const devServer = {
  contentBase: path.join(__dirname, '../src'),
  port: 3000,
  overlay: true,
  hot: true,
  index: 'index.html',
  watchContentBase: true,
};

module.exports = {
  mode,
  entry,
  module: modules,
  plugins,
  devServer,
  devtool: 'cheap-eval-source-map',
};
