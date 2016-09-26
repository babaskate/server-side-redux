'use strict';

var config = require('./');
var path = require('path');

module.exports = {
    src: config.sourceDirectory + '/js/main.js',
    dest: config.publicDirectory,
    sourcemapsOptions: {
        identityMap: true,
        debug: true,
        loadMaps: true
    },
    webpackOptions: {
        entry: [
            'babel-polyfill',
            config.sourceDirectory + '/js/main.js'
        ],
        output: {
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    include: [
                        path.resolve(config.sourceDirectory + '/js')
                    ],
                    query: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['transform-runtime'],
                    }
                }
            ]
        }
    }
};


