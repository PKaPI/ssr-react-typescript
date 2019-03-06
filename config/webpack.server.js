const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const paths = require('./paths');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: {
    'server-entry': paths.serverEntry,
  },
  plugins:[
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(scss|sass)/,
        include: paths.sourceDir,
        use: [
          {
            loader: 'isomorphic-style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ]
      },
    ]
  },
  externals: [nodeExternals()],
});
