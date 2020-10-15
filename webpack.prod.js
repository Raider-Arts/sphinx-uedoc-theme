const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
					filename: "LICENSES.txt",
					banner: (licenseFile) => {
            return `License information can be found in ${licenseFile}`;
          },
        },
      }),
			new OptimizeCssAssetsPlugin({})
		]
  },
});
