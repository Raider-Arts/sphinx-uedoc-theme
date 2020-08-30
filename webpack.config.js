const path = require('path');

module.exports = {
  entry: './src/bundle.js',
  mode: 'development',
  watch: true,
  output: {
    filename: './main.js',
    path: path.resolve(__dirname, 'uedoc_theme_wp'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          'file-loader?name=fonts/[name].[ext]!static'
        ],
      },
    ],
  },
};
