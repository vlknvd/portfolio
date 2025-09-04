const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'bundle.[contenthash].js', // с хешем для кеширования
    assetModuleFilename: 'assets/[name].[contenthash][ext]', // картинки тоже с хешем
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // css с хешем
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
  },
  devtool: false, // или 'source-map', если нужны сорсмапы в продакшене
});
