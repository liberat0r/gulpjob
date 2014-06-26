module.exports.gulp = require('gulp');

module.exports.gulpPlugin = {
    uglifyjs: require('gulp-uglifyjs'),
    concat_sourcemap: require('gulp-concat-sourcemap'),
    autoprefixer: require('gulp-autoprefixer'),
    clean: require('gulp-clean'),
    rename: require('gulp-rename'),
    notify: require('gulp-notify'),
    compass: require('gulp-compass'),
    minifyCSS: require('gulp-minify-css'),
};