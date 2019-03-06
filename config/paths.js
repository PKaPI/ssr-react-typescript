const path = require('path');

function resolveResource(filename) {
  return path.resolve(__dirname, `../${filename}`);
}

module.exports = {
  sourceDir: resolveResource('src'),
  clientEntry: resolveResource('src/index.jsx'),
  serverEntry: resolveResource('src/server/index.js'),
  distDir: resolveResource('dist'),
  publicDir: resolveResource('public'),
  htmlTemplate: resolveResource('public/index.html'),
};
