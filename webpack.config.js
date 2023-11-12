const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除
const CopyPlugin = require('copy-webpack-plugin'); // 复制资源
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, './src'), //基础目录
  entry: './a.js', // 数组最后一个文件是入口，其它预先构建
  output: {
    path: path.resolve(__dirname, 'dist'), //输出目录 
    filename: 'bundle.js', // 文件名称
    publicPath: '', // 访问静态资源路径
    // chunkFilename: '[name]-[chunkhash:8].js', // 异步模块名称
  },
  devServer: {
    historyApiFallback: true,
    static: './',
    compress: true,
    hot: true,
    port: 8080
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
        include: /src/,
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
            limit: 8 * 1024,
            name: '[name]-[contenthash:8].[ext]',
            publicPath: ''
          },
         
        }
       
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'webpack和babel入门教材', // html 标题
      filename: 'index.html',
      minify: true, // 是否压缩生成的html文件
      showErrors: false, // 是否在html上展示错误信息
    }),
    new CleanWebpackPlugin(), // 清除本地文件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/img/'),
          to: path.resolve(__dirname, 'dist/img/')
        }
      ]
    })
  ]
}