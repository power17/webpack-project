const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
      app1: './a.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'), //资源输出位置
	    // filename: '[name]_[chunkhash:8].js',
	    filename: 'bundle.js',
	    publicPath: '/dist', // 访问的资源cdn路径()
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
		}, {
		  test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      exclude: /node_modules/,
		},{
        test: /\.jpg$/,
        use: 'file-loader'
      }
		]
    },
    plugins: [
      new CleanWebpackPlugin(),
    ]
    
  };