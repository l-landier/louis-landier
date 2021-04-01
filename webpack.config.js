const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
  mode: 'development',
  //mode: 'production',
  entry: {
    'index' : './src/js/index.js',
    'style': './src/sass/style.scss',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new HtmlCriticalWebpackPlugin({
      base: path.resolve(__dirname, 'dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      width: 450,
      height: 900,
      penthouse: {
        blockJSRequests: true,
      }
    }),
    new RemovePlugin({
      /**
       * After compilation permanently remove empty JS files created from CSS entries.
       */
      after: {
        test: [
          {
            folder: path.resolve(__dirname, 'dist'),
            method: (absoluteItemPath) => {
              return new RegExp(/style.js$/, 'm').test(absoluteItemPath);
            },
          }
        ]
      }
      }),
  ],
};
