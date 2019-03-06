const paths = require('./paths');
const webpack = require('webpack');

module.exports = {
  output: {
    path: paths.distDir,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins:[
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js|jsx?/,
        include: paths.sourceDir,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },

};
