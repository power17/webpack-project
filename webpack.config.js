const path = require('path');
const WebpackDevServer = require('webpack-dev-server');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  mode: 'development',  // development production, none
  entry: './src/main.js', 
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
    compress: true,
    port: 9000,
    hot: true,
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
      },
      // {
      //       test: /\.ts$/,
      //       use: 'ts-loader'
      // },
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
      }, {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
  },
  plugins: [
        new MiniCssExtractPlugin(),
        new HTMLWebpackPlugin(),
        new VueLoaderPlugin(),
  ]
  
};