'use strict';

var config = require('./');

module.exports = {

    options: {
        verbose: false,
        script: 'server.js',
        ext: 'html js scss json',
        ignore: [
            '**/*.swp',
            'node_modules/**/*.*',
            'gulpfile.js/**/*.*'
        ],
        env: {
            'NODE_ENV': config.constants.env.DEV,
            'PORT': 10110
        },
        nodeArgs: []
    }

};

