const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RobotstxtPlugin = require('robotstxt-webpack-plugin')

module.exports = {
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.svelte', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: process.env.NODE_ENV == 'development' ? true : false,
            preprocess: require('svelte-preprocess')({
              stylus: {
                paths: ['node_modules'],
              },
            }),
          },
        },
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|ttf|eot|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', 'src/public/index.html'),
      favicon: path.resolve(__dirname, '..', 'src/public/favicon.png'),
      minify: {
        collapseWhitespace: true,
      },
    }),
    new RobotstxtPlugin({
      filePath: path.resolve(__dirname, '..', 'src/public/robots.txt'),
    }),
  ],
  performance: false,
}
