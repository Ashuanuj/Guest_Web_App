const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'myStyles.scss',
  disable: isDev
});

module.exports = {
 
  entry: {
    main: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  target: 'web',
  devtool: '#source-map',
   resolve: {
    extensions: ['*','.js', '.jsx', '.json', '.scss']
   },
  
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /(\.css|\.scss)$/,
      exclude: /node_modules/,
      use: extractScss.extract({
        use:[
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ],
        fallback: 'style-loader'
      })
    },
    
    { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
      exclude: /node_modules/,
                  loader: 'url-loader' 
              },
                {
                  test: /\.(png|jpg|gif)$/,
                  use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 50000
                      }
                    }
                  ]
                }
   ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({  
       template: './public/index.html', 
       favicon: './public/favicon.ico' 
    }),
    new webpack.DefinePlugin({
    
     API_URL: JSON.stringify('https://heliusbe.tech-active.com:90'),

  }),
     extractScss
   ]
}
 