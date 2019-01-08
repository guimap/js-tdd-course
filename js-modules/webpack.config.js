const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  stats: {
    colors: true
  }
}
