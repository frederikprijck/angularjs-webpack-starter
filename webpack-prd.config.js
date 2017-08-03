const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'public' );

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader',
                enforce: 'pre'
            },

            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: [
                    'ng-annotate-loader',
                    'awesome-typescript-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '../'
                }),
            },

            {
                test: /\.(jpg|png|gif)$/,
                use: 'file-loader'
            },

            {
                test: /\.(svg|woff|woff2|eot|ttf)$/,
                use: 'file-loader?outputPath=fonts/'
            },

            {
                test: /.html$/,
                exclude: /index.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new UglifyJsPlugin({
            beautify: false,
            output: {
                comments: false
            },
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
                negate_iife: false
            },
        }),
        new HtmlWebpackPlugin({
            title: 'AngularJS - Webpack',
            template: 'index.html',
            inject: true
        }),
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json'),
                    typeCheck: true
                }
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),

        new ExtractTextPlugin('css/style.css')

    ],

    devtool: 'cheap-module-source-map',

    entry: './index.ts',
    output: {
        path: DESTINATION,
        filename: 'js/[name]-bundle-[hash].js',
        chunkFilename: '[name]-chunk-[hash].js'
    },
};
