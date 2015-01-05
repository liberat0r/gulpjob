module.exports.gulp = require('gulp');

module.exports.gulpPlugin = {
	jshint          : require('gulp-jshint'),
	uglify          : require('gulp-uglify'),
	concat_sourcemap: require('gulp-concat-sourcemap'),
	autoprefixer    : require('gulp-autoprefixer'),
	clean           : require('gulp-clean'),
	rename          : require('gulp-rename'),
	notify          : require('gulp-notify'),
	compass         : require('gulp-compass'),
	sass            : require('gulp-sass'),
	minifyCSS       : require('gulp-minify-css'),
	imagemin        : require('gulp-imagemin'),
	gulpWatch       : require('gulp-watch'),
	gulpPlumber     : require('gulp-plumber'),
	include         : require('gulp-include'),
	map             : require('map-stream'),
	browserSync     : require('browser-sync'),
	pngcrush        : require('imagemin-pngcrush')
};