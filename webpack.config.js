const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    theme: './src/bundle.js',
  },
  context: path.resolve(__dirname, ''),
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // change this RELATIVE to your output.path!
  }),
    // new HtmlWebpackPlugin({
    //   title: 'Sphinx uedoc theme',
    //   template: "./src/layout.ejs",
    //   filename: path.resolve(__dirname, 'uedoc_theme_wp') + '/webpack_layout.html',
    //   inject: 'head'
    // }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/static/'),
          to: path.resolve(__dirname, 'uedoc_theme_wp'),
        },
      ],
    }),
  ],
  mode: 'development',
  watch: true,
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'uedoc_theme_wp/static/'),
    publicPath: '_static/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // { loader: 'style-loader', options: { injectType: 'linkTag' } },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              reloadAll: true
            }
          },
          'css-loader',
        ],
        sideEffects: true
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?name=images/[name].[ext]'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'css/fonts/',
              // publicPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};