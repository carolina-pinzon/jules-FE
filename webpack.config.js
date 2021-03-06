const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpackConfigs = {
  development: require('./webpack/development.js'),
  production: require('./webpack/production.js')
};

const NODE_ENV = process.env.NODE_ENV;

const webpackCommonConfig = {
  entry: {
    index: path.join(__dirname, 'src/index.jsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
            url: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            outputStyle: 'expanded',
            includePaths: [
              path.resolve(__dirname, 'src/styles')
            ]
          }
        }]
      })
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          emitWarning: NODE_ENV === 'development',
          emitError: NODE_ENV === 'production'
        }
      }
    }),
    new StyleLintPlugin({
      configFile: path.join(__dirname, '.stylelintrc'),
      files: '**/*.?(sa|sc|c)ss',
      context: path.join(__dirname, 'src'),
      emitErrors: NODE_ENV !== 'development'
    }),
    new HtmlWebpackPlugin({
      title: 'hatch-react',
      template: path.join(__dirname, 'index.html'),
      inject: 'body',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'public'),
      to: path.join(__dirname, 'dist')
    }]),
    new ImageminPlugin({
      disable: NODE_ENV !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ]
};

const webpackEnvironmentConfig = (() => {
  switch (NODE_ENV) {
    case 'production':
      return webpackConfigs.production;
    case 'development':
    default:
      return webpackConfigs.development;
  }
})();

module.exports = merge(webpackCommonConfig, webpackEnvironmentConfig);
