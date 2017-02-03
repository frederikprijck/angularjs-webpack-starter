const path = require('path');
const webpack = require('webpack');
const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );

module.exports = {
    context: ROOT,

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [ /node_modules/ ],
                loader: 'awesome-typescript-loader'
            },
            
            {
                test: /\.ts$/,
                exclude: [ 
                    /node_modules/,
                    /\.spec\.ts$/
                ],
                loader: 'istanbul-instrumenter-loader',
                enforce: 'post'
            }
        ]
    },

    devtool: 'cheap-module-source-map',
    devServer: {}
};
