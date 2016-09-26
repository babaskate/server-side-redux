'use strict';

const gulp = require('gulp');
const config = require('../config/lint');
const linter = require('gulp-eslint');
const gutil = require('gulp-util');

gulp.task('lint', () => {

    gutil.log(gutil.colors.yellow('source js: '), config.src);
    gutil.log(gutil.colors.yellow('gulp source js: '), config.gulpSrc);
    gutil.log(gutil.colors.yellow('test specs: '), `!${config.tests}`);

    return gulp.src([
        config.src,
        config.gulpSrc,
        `!${config.tests}`
    ])
    .pipe(linter())
    .pipe(linter.format())
    .pipe(linter.failAfterError());

});

