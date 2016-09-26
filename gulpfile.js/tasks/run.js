'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    config = require('../config/run');

gulp.task('run', function() {

    gutil.log(gutil.colors.yellow('run options: '), config.options);

    nodemon(config.options)
        .on('restart', function () {
            gutil.log(gutil.colors.cyan('\n-----\nServer Refreshed\n-----'));
        });
});

