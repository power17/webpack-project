const path = require('path');

module.exports = {
  entry: './a.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    static: '/',
    open: false,
    compress: true,
    hot: true,
    port: 8081,
  },
  mode: 'none'
};