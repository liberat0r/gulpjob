module.exports.gulp = require('gulp');

module.exports.gulpPlugin = {
	jshint: require('gulp-jshint'),
    concat_sourcemap: require('gulp-concat-sourcemap'),
    rename: require('gulp-rename'),
    notify: require('gulp-notify'),
    compass: require('gulp-compass'),
    gulpWatch: require('gulp-watch'),
    gulpPlumber: require('gulp-plumber'),
	include: require('gulp-include'),
	zip: require('gulp-zip'),
    map: require('map-stream'),
    browserSync: require('browser-sync')
};
