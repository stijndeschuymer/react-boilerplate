const webpack = require('webpack');

module.exports = {
    context: __dirname + '/lib',
    entry: {
        bundle: './index.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        path: __dirname + '/dist',
    },
    devtool: 'source-map',
    plugins: [

    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    }
};
