const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
// const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const SimpleProgressWebpackPlugin = require( 'simple-progress-webpack-plugin' );

module.exports = {
  entry: {
    // vendor: 'vue',
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    chunkFilename: '[name].js'
    // publicPath: '/vue-test/dist'
  },
  // externals: {
  //   vue: 'vue'
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: path.resolve(__dirname, "src"),
        loader: 'vue-loader',
        options: {
          loaders: {
            // scss: ExtractTextPlugin.extract({
            //   fallback: 'vue-style-loader',
            //   use: ['css-loader', 'sass-loader', {
            //     loader: 'sass-resources-loader',
            //     options: {
            //       resources: path.resolve(__dirname, './src/scss/index.scss')
            //     }
            //   }]
            // })
            scss: ExtractTextPlugin.extract({
              use: ['css-loader', 'sass-loader'],
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test:/\.(scss|sass)$/,
        // use: ['style-loader', 'css-loader', 'sass-loader']
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'fast-sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'        
      }
    ]
  },
  devServer: {
    quiet: true,
    // noInfo: true,
    port: '9000',
    hot: true,
    host: "0.0.0.0"
    // contentBase: './src'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
    new SimpleProgressWebpackPlugin({
      // format: 'expanded'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
};
