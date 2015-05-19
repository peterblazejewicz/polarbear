'use strict';
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  util = require('gulp-util');

var paths = {
  styles: ['assets/styles/main.less']
};

gulp.task('less', function() {
  return gulp.src(paths.styles)
    .pipe(less({
      compress: false
    }))
    .on('error', util.log)
    .pipe(autoprefixer('ie9'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify('Less compiled :D'));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch(paths.styles, ['less']);
});

// default gulp task
gulp.task('default', ['watch', 'less']);
