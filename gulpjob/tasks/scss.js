
/**
 * Compile CSS file from scss
 *
 * @src SCSS file that imports the rest
 * @dest CSS file and minified CSS file
 */

var scss = function () {

    gulp.task('scss', function(){
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
    });
};

module.exports = scss;