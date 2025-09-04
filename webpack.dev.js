const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    open: true,
    hot: false,
    liveReload: true,
    port: 3000,
    client: {
      overlay: true,
    },
  },
  devtool: 'inline-source-map',
});
