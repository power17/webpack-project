const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          }
        ],
      },{
            test: /\.ts$/,
            use: 'ts-loader'
      },
      {
        test: /\.css$/i,
        use: [// 根据运行环境判断使用那个 loader
              (process.env.NODE_ENV === 'development' ?
                    'style-loader' :
                MiniCssExtractPlugin.loader)
              ,"css-loader"
        ],
      },{
            test: /\.s[ac]ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin()
  ]
  
};