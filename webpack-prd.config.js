const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve( __dirname, 'public' );

/**
 * Webpack Plugins
 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: DESTINATION,
        filename: 'js/[name]-bundle-[chunkhash].js'
    },

    plugins: [
        new UglifyJsPlugin()
    ]
});
