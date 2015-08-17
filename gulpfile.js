'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
	return gulp.src('./public/css/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(minifyCss())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('default', function () {
	
});

gulp.task('watch:css',['css'] ,function () {
	gulp.watch(['./public/css/scss/**/*.scss'], ['css']);
})