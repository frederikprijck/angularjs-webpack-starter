const path = require("path");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.config.js");
const DESTINATION = path.resolve(__dirname, "public");

/**
 * Webpack Plugins
 */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = webpackMerge(commonConfig, {
  mode: "production",
  output: {
    path: DESTINATION,
    filename: "js/[name]-bundle-[chunkhash].js",
  },
  optimization: {
    chunkIds: "named",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [new UglifyJsPlugin()],
});
