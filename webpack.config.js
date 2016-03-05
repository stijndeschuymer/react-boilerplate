const webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        bundle: './index.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        path: __dirname + '/lib',
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
