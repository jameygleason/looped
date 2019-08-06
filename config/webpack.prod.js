const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = 'development';

const modules = {
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
        presets: [
          ['@babel/preset-env', { debug: false }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      },
    },
  ],
};

const plugins = [
  // new UglifyJSPlugin({
  //   sourceMap: true,
  // }),
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     NODE_ENV: JSON.stringify(env.NODE_ENV),
  //   },
  // }),
  // new BundleAnalyzerPlugin(),
];

const config = {
  mode,
  module: modules,
  // optimization: {
  //   splitChunks: {
  //     automaticNameDelimiter: '-',
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendor',
  //         test: /[\\/]node_modules[\\/]/,
  //         chunks: 'initial',
  //         minChunks: 2,
  //       },
  //     },
  //   },
  // },
  plugins,
};
console.log('config:', config);

const loopedCarouselConfig = {
  name: 'looped-carousel',
  entry: path.resolve(__dirname, '../src/looped-carousel.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'looped-carousel.js',
    library: 'Looped Carousel',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  ...config,
};

const reactCarouselConfig = {
  name: 'looped-carousel-react',
  entry: {
    index: path.resolve(__dirname, '../src/LoopedCarouselReact.js'),
  },
  output: {
    path: path.join(__dirname, '../react'),
    filename: '[name].js',
    library: 'Looped Carousel',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  ...config,
};

module.exports = [loopedCarouselConfig, reactCarouselConfig];
