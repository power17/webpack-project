const path = require('path');
module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, './src'), //基础目录
  entry: './a.js', // 数组最后一个文件是入口，其它预先构建
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录 
    filename: 'bundle.js', // 文件名称
    publicPath: './dist/', // 访问静态资源路径
    chunkFilename: '[chunkhash:8].js', // 异步模块名称
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024
          }
        }
       
      }
    ]
  }
}