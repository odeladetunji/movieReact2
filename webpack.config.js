const path = require('path');
require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './dev/js/index.js',

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  },
  resolve: {
    extensions: ['json', '.js', '.jsx', 'css']
  },
  module: {

    rules: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
             },

             {
               test: /\.css$/,
               loader: 'style-loader!css-loader'
             },

             {
                test: /\.(png|jpg|gif|tif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
              }
           ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}












