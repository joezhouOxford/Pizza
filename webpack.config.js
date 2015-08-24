'use strict';
var webpack = require('webpack'),
path = require('path');
var APP = path.join(__dirname, "app");



module.exports = {
    // config goes here
    context: APP,
    entry: {
        app: ['./webpack/bootstrap.js']
    },
    output: {
        path: 'app/dist',
        filename: 'bundle.js',
        publicPath: "publicpathUrl"
    },
    resolve: {
        root: path.join(__dirname, "app")
    },
    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: "style!css!sass"
            },           
            {
                test: /\.(woff|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'base64-font-loader'
            },
            {
                test: /\.(woff2|jpe?g|png|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=res/[name].[ext]?[hash]'
            }

        ]
    }
};