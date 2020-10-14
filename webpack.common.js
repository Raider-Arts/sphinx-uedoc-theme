const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    theme: './src/bundle.js',
  },
  context: path.resolve(__dirname, ''),
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/static/'),
          to: path.resolve(__dirname, 'uedoc_theme'),
        },
      ],
    }),
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'uedoc_theme/static/'),
    publicPath: '_static/',
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              reloadAll: true,
            },
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          'sass-loader',
        ],
        sideEffects: true,
      },
      {
        test: /^.*?(?=fonts).*?\.(woff|woff2|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/',
            },
          },
        ],
      },
      {
        test: /^.*?(?=images).*?\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/',
              publicPath: '../images/',
            },
          },
        ],
      },
      {
        test: /^.*?(?=images).*?\.svg$/,
        use: 'raw-loader'
      },
      {
        test: /\.json_t$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'config/',
              publicPath: '../config/',
            },
          },
        ],
      },
    ],
  },
};
