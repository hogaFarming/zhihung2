var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  devtool: 'source-map',

  entry: {
    polyfills: './src/polyfills.ts',
    vendors: './src/vendors.ts',
    app: './src/main.ts'
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    pubilcPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      { test: /\.css$/, loader: 'style!css' },

      { test: /\.html$/, loader: 'html' },

      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendors', 'polyfills']
    }),

    // new webpack.optimize.UglifyJsPlugin()
  ]
};