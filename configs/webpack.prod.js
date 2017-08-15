const webpack = require('webpack')
// Merge webpack config file
const WebpackMerge = require('webpack-merge')
// Clean up the dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin')

const baseConfig = require('./webpack.base.js')
const rootPath = require('./config.js').rootPath

if (process.env.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.')
}

module.exports = WebpackMerge(baseConfig, {
  output: {
    publicPath: '/'
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new CleanWebpackPlugin(['dist'], {
      root: rootPath
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})
