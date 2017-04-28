const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

/**
 * Webpack Plugins
 */
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

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
            },{
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                use: 'awesome-typescript-loader'
            },
            
            {
                test: /\.ts$/,
                exclude: [ 
                    /node_modules/,
                    /\.spec\.ts$/
                ],
                use: 'istanbul-instrumenter-loader',
                enforce: 'post'
            },

            {
                test: /.html$/,
                use: 'html-loader'
            }
        ]
    },

    plugins: [
        new LoaderOptionsPlugin({
            debug: true,
            options: {
                tslint: {
                    configuration: require('./tslint.json'),
                    typeCheck: true
                }
            }
        }),

    ],

    devtool: 'cheap-module-source-map',
    devServer: {}
};
