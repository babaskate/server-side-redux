'use strict';

var gulp = require('gulp');

gulp.task('js', function () {

    var config = require('../config/js'),
        webpackStream = require('webpack-stream'),
        gutil = require('gulp-util'),
        uglify = require('gulp-uglify'),
        sourcemaps = require('gulp-sourcemaps'),
        argv = require('yargs').argv;

    var debug = argv.debug || false;//,
//        withSourcemaps = argv.withSourcemaps || argv.debug || false;

    gutil.log(gutil.colors.yellow('source js: '), config.src);
    gutil.log(gutil.colors.yellow('debug js: '), debug);
    gutil.log(gutil.colors.yellow('sourcemaps options: '), config.sourcemapsOptions);

    return gulp.src(config.src)
        .pipe(sourcemaps.init(config.sourcemapsOptions))
        .pipe(webpackStream(config.webpackOptions))
        .pipe(uglify())
//        .on('error', gutil.log)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dest));

});
