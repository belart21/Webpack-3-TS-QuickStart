const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pathsToClean = [
  'dist'
];

let cleanOptions = {

};

const extractLess = new ExtractTextPlugin({
  filename: "[name][hash].css"
});

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    extractLess,
    new HtmlWebpackPlugin({inject: 'body', filename: 'index.html', template: 'index.html'}),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            // attrs: [':data-src']
          }
        }
      }
,
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.less$/,
        use: extractLess.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "less-loader"
          }],
          fallback: "style-loader"
        })
      }
      ]
  },
  resolve: {
    moduleDirectories: [],
    extensions: [ '.ts', '.tsx', '.js', 'less', 'css' ]
  }
};

module.exports = config;

