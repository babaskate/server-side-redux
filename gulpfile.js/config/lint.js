'use strict';

var config = require('./');

module.exports = {
    tests: config.sourceDirectory + '/js/**/*.spec.js',
    src: config.sourceDirectory + '/js/**/*.js',
    gulpSrc: './gulpfile.js/**/*.js'
};
