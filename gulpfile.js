"use strict";
 
// Requires
var gulp = require('gulp'),
  	/*uglify = require('gulp-uglify'),*/
	uglifyjs = require('gulp-uglifyjs'),
    concat_sourcemap = require('gulp-concat-sourcemap'),
    autoprefixer = require('gulp-autoprefixer'),
    /*imagemin = require('gulp-imagemin'),*/
  	minifyCSS = require('gulp-minify-css'),
    compass = require('gulp-compass'),
    notify = require('gulp-notify'),
    /*ignore = require('gulp-ignore'),*/
    rename = require('gulp-rename'),
    clean = require('gulp-clean');




// Files & Paths
var basePaths = {
    main : 'app/webroot/src/',
    dist : 'app/webroot/',
};

var files = {

    clean : basePaths.dist + 'css/generate_sprites.css',

    src : {
      compiled_js : basePaths.dist + '/js/scripts.js',
      js : basePaths.main + 'js/**/*.js',
      scss : basePaths.main + 'sass/main.scss',
      sprites : basePaths.main + 'sass/generate_sprites.scss',
      sprites_compiled : basePaths.dist + 'css/generate_sprites.css',
    },

};

var paths = {

    src : {
      scss : basePaths.main + 'sass/',
      sprites : basePaths.dist + '/img',
    },

    dist : {
      js : basePaths.dist + 'js',
      css : basePaths.dist + 'css',
      sprites_scss : basePaths.main + 'sass',
    },

};




// Build JavaScript files
gulp.task('js', function () {
    return gulp.src(files.src.js)
      .pipe(concat_sourcemap('scripts.js', {
            sourceRoot : '/'
      }))
      .on('error', function(){
        notify("JavaScript Failed")
      })
	  .pipe(gulp.dest(paths.dist.js))
      .pipe(notify({
            message : "JavaScript Concatenated",
            onLast : true,
        }));
});




// Minify Javascript files
gulp.task('jsminify', function () {
    return gulp.src(files.src.compiled_js)
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglifyjs({
            outSourceMap: 'scripts.min.map'
        }))
        .on('error', function(){
            notify("JavaScript Minification Failed")
        })
        .pipe(gulp.dest(paths.dist.js))
        .pipe(notify({
            message : "JavaScript Minified",
            onLast : true,
        }));
});




// Build CSS files
gulp.task('scss', function () {
    return gulp.src(files.src.scss)
        .pipe(compass({
          css: paths.dist.css,
          sass: paths.src.scss,
          image: paths.src.sprites,
        }))
		.on('error', function(){
			notify("SCSS Failed")
		})
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(paths.dist.css))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.dist.css))
        .pipe(notify("SCSS Recompiled"));
});




// Build Sprites file
gulp.task('sprites', function () {
    return gulp.src(files.src.sprites)
        .pipe(compass({
          css: paths.dist.css,
          sass: paths.src.scss,
          image: paths.src.sprites,
          relative: true,
        }))
		.on('error', function(){
			notify("Sprites Failed")
		})
        .pipe(rename({ 
          basename: 'sprites', 
          extname: '.scss' 
        }))
        .pipe(gulp.dest(paths.dist.sprites_scss))
        .pipe(notify("Sprites Recompiled"));
});




// Rename Sprites file
gulp.task('rename_sprites', function () {
    return gulp.src(files.src.sprites_compiled)
        .pipe(rename({
            basename: 'sprites',
            extname: '.scss'
        }))
        .pipe(gulp.dest(paths.dist.sprites_scss));
});



// Clean
gulp.task('clean', function () {
    return gulp.src(files.clean)
        .pipe(clean({force: true}));
});




// Watchers
gulp.task('watch', function () {

    gulp.start('sprites', 'rename_sprites', 'js', 'jsminify', 'scss', 'clean');

    gulp.watch(basePaths.dist + 'src/sass/*.scss', ['scss']);

    gulp.watch(basePaths.dist + 'img/icons/*.png', ['sprites', 'rename_sprites', 'clean']);

    gulp.watch(basePaths.dist + 'src/js/*.js', ['js', 'jsminify']);

});