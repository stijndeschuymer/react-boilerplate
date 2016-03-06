const webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: [ 'PhantomJS' ], //run in 'Chrome' to debug
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework, do not swap for jasmine!
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            './src/**/*.test.js',
            './src/**/*.spec.js'
        ],
        preprocessors: {
            './src/**/*.js': [ 'webpack', 'sourcemap']
        },
        reporters: [ 'dots' ],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-sourcemap-loader',
            'karma-mocha',
            'karma-nyan-reporter',
            'karma-webpack'
            //'karma-coverage',
            //'karma-junit-reporter',
        ],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    }
                ]
            }
        },
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};
