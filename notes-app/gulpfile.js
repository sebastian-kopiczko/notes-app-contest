'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('concat', function () {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('src'));
});

gulp.task('sass', function () {
  return gulp.src('src/app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/app/**/*.scss', ['sass']);
});
