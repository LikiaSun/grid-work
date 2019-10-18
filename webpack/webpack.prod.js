const path = require('path')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },
  devtool: 'cheap-module-source-map',
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
        },
      },
    },
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
})
