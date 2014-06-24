"use strict";

var gulp = require('gulp');

var gulpPlugin = {
    uglifyjs: require('gulp-uglifyjs'),
    concat_sourcemap: require('gulp-concat-sourcemap'),
    autoprefixer: require('gulp-autoprefixer'),
    clean: require('gulp-clean'),
    rename: require('gulp-rename'),
    notify: require('gulp-notify'),
    compass: require('gulp-compass'),
    minifyCSS: require('gulp-minify-css'),
};
/*var gulpPlugin = require("gulp-load-plugins")({
 pattern: ['gulp-*', 'gulp.*'],
 replaceString: /\bgulp[\-.]/
 });*/

// Files & Paths
var basePaths = {
    main: 'app/webroot/src/',
    dist: 'app/webroot/',
};

var files = {

    clean: basePaths.dist + 'css/generate_sprites.css',

    src: {
        compiled_js: basePaths.dist + '/js/scripts.js',
        js: basePaths.main + 'js/**/*.js',
        scss: basePaths.main + 'sass/main.scss',
        sprites: basePaths.main + 'sass/generate_sprites.scss',
        sprites_compiled: basePaths.dist + 'css/generate_sprites.css',
    },

};

var paths = {

    src: {
        scss: basePaths.main + 'sass/',
        sprites: basePaths.dist + '/img',
        sourcemaps_root: '/'
    },

    dist: {
        js: basePaths.dist + 'js',
        css: basePaths.dist + 'css',
        sprites_scss: basePaths.main + 'sass',
    },

};


var changeEvent = function (evt) {
    gulpPlugin.notify( '[watcher] File ' + evt.path + ' was ' + evt.type + ', compiling...');
}

var displayError = function (error) {
    var errorString = '[' + error.plugin + ']';

    errorString += ' ' + error.message.replace("\n", '');
    if (error.fileName)
        errorString += ' in ' + error.fileName;
    if (error.lineNumber)
        errorString += ' on line ' + error.lineNumber + '.';

    gulpPlugin.notify(errorString)
}


// Define gulp task functions
var gulpTask = {

    /**
     * Concatenate JS files and create source map
     *
     * @src JS files
     * @dest concatenated JS file and source map
     */
    js: function () {
        return gulp.src(files.src.js)
            .pipe(gulpPlugin.concat_sourcemap('scripts.js', {
                sourceRoot: paths.src.sourcemaps_root
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulp.dest(paths.dist.js))
            .pipe(gulpPlugin.notify({
                message: "JavaScript Concatenated",
                onLast: true,
            }));
    },

    /**
     * Minify JS files and create maps
     *
     * @src concatenated JS file
     * @dest minified JS file and source map
     */
    jsminify: function () {
        return gulp.src(files.src.compiled_js)
            .pipe(gulpPlugin.rename({ suffix: '.min' }))
            .pipe(gulpPlugin.uglifyjs({
                outSourceMap: 'scripts.min.map'
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulp.dest(paths.dist.js))
            .pipe(gulpPlugin.notify({
                message: "JavaScript Minified",
                onLast: true,
            }));
    },

    /**
     * Compile CSS file from scss
     *
     * @src SCSS file that imports the rest
     * @dest CSS file and minified CSS file
     */
    scss: function () {
        return gulp.src(files.src.scss)
            .pipe(gulpPlugin.compass({
                css: paths.dist.css,
                sass: paths.src.scss,
                image: paths.src.sprites,
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulpPlugin.autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
            .pipe(gulp.dest(paths.dist.css))
            .pipe(gulpPlugin.rename({ suffix: '.min' }))
            .pipe(gulpPlugin.minifyCSS())
            .pipe(gulp.dest(paths.dist.css))
            .pipe(gulpPlugin.notify("SCSS Recompiled"));
    },

    /**
     * Create sprites CSS file and merge the png files
     *
     * @src png files to be merged
     * @dest sprites CSS file
     */
    sprites: function () {
        return gulp.src(files.src.sprites)
            .pipe(gulpPlugin.compass({
                css: paths.dist.css,
                sass: paths.src.scss,
                image: paths.src.sprites,
                relative: true,
            }))
            .on('error', function (err) {
                displayError(err);
            })
            .pipe(gulpPlugin.notify("Sprites Recompiled"));
    },

    /**
     * Rename the sprites CSS file to SCSS and make it available for @extend
     *
     * @src sprites CSS file created from the sprite task
     * @dest sprites SCSS file
     */
    rename_sprites: function () {
        return gulp.src(files.src.sprites_compiled)
            .pipe(gulpPlugin.rename({
                basename: 'sprites',
                extname: '.scss'
            }))
            .pipe(gulp.dest(paths.dist.sprites_scss));
    },

    /**
     * Clean files that are not needed
     *
     */
    clean: function () {
        return gulp.src(files.clean)
            .pipe(gulpPlugin.clean({force: true}));
    },

}


// Register tasks
gulp.task('js', function () {
    gulpTask.js()
});
gulp.task('jsminify', function () {
    gulpTask.jsminify()
});
gulp.task('scss', function () {
    gulpTask.scss()
});
gulp.task('sprites', function () {
    gulpTask.sprites()
});
gulp.task('rename_sprites', function () {
    gulpTask.rename_sprites()
});
gulp.task('clean', function () {
    gulpTask.clean()
});


// Watchers
gulp.task('watch', function () {
    // Build
    gulp.start('js', 'jsminify', 'scss', 'sprites', 'rename_sprites', 'clean');

    // SCSS
    gulp.watch(basePaths.dist + 'src/sass/*.scss', ['scss']).on('change', function (evt) {
        changeEvent(evt)
    });
    ;
    // Sprites
    gulp.watch(basePaths.dist + 'img/icons/*.png', ['sprites', 'rename_sprites', 'clean']).on('change', function (evt) {
        changeEvent(evt)
    });
    ;
    // JS
    gulp.watch(basePaths.dist + 'src/js/*.js', ['js', 'jsminify']).on('change', function (evt) {
        changeEvent(evt)
    });
    ;
});
