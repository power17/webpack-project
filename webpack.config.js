const path = require('path');
module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, './src'), //基础目录
  entry: './main.js', // 数组最后一个文件是入口，其它预先构建
  output: {
    path: path.resolve(__dirname, ''),
    filename: '[fullhash].js' // 文件名称
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
}