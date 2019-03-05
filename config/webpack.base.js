const paths = require('./paths');

module.exports = {
  output: {
    path: paths.distDir,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx|js|jsx?/,
        include: paths.sourceDir,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader:'ts-loader'
          }
        ]
      }
    ],
  },
};
