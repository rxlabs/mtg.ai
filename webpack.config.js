const path = require('path')

const serverless = require('serverless-webpack')
const nodeExternals = require('webpack-node-externals')

const isServerless = Object.keys(serverless.lib.entries).length !== 0

module.exports = {
  entry: isServerless
    ? serverless.lib.entries
    : path.join(__dirname, 'index.js'),
  target: 'node',
  mode: serverless.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  devtool: 'nosources-source-map',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: isServerless
      ? path.join(__dirname, '.webpack')
      : path.join(__dirname, 'build'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  }
}
