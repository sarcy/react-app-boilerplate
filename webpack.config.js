let path = require('path'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {

  // The base directory for resolving entry points.
  context : path.resolve(__dirname, './src'),

  //devtool : '#cheap-source-map',
  devtool : '#eval',

  // Can provide multiple entry points as well.
  entry   : [
    './app.js'
  ],

  // Output all the content to the build folder.
  output : {
    path      : path.resolve(__dirname, './build/'),
    filename  : './js/[name].bundle.js'
  },

  devServer : {
    inline : true,
    port   : 8080
  },

  // Build the files which could be jsx or js.
  module : {
    rules : [
      {
        test    : /\.(jsx|js)$/,
        exclude : /node_modules/,
        use     : {
          loader  : 'babel-loader',
          options : {
            presets : ['es2015', 'react']
          }
        }
      },
      {
        test    : /\.scss?$/,
        exclude : /node_modules/,
        use     : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use      : ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  // CleanWebpackPlugin: Deletes the previously built output folder.
  // HTMLWebpackPlugin: Plugin to create the HTML file in the build folder.
  // ExtractTextPlugin: Create a single css file from the scss import files.
  plugins : [
    new CleanWebpackPlugin(['build']),
    new HTMLWebpackPlugin({
      title    : 'CUSTOMIZE TITLE HERE',
      template : path.resolve(__dirname, './src/template/index.html.ejs')
    }),
    new ExtractTextPlugin({
      filename  : './styles/app.css',
      allChunks : true
    })
  ]
}

module.exports = config;