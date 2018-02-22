const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app : ['./app', './util.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: 'jshint-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ['env']}
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
}