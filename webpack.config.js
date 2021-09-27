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
  externals: [nodeExternals()], // ignores node_modules such as express js while bundling
  externalsPresets: {
    node: true // ignores node built ins such as fs/path etc.
  }
};
