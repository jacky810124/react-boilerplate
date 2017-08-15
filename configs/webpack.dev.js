const webpack = require('webpack')
const WebpackMerge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const distPath = require('./config.js').distPath

module.exports = WebpackMerge(baseConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distPath,
    port: 8080
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ]
})
