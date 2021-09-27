const path = require('path');
const { NODE_ENV = 'production' } = process.env;
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [new NodemonPlugin()],
  externals: [nodeExternals()],
  externalsPresets: {
    node: true
  }
};
