const path = require('path')
// Simplifies creation of HTML files to serve your webpack bundles
const HtmlWebpackPlugin = require('html-webpack-plugin')
// Extract text from bundle into a file
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const distPath = require('./config.js').distPath
const rootPath = require('./config.js').rootPath

module.exports = {
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(rootPath, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'src/index.ejs'),
      hash: true,
      title: process.env.NODE_ENV === 'production' ? 'Shoppp' : 'Development - Shoppp'
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
