
/**
 * Concatenate JS files and create source map
 *
 * @src JS files
 * @dest concatenated JS file and source map
 */

var js = function(){

    gulp.task('js', function () {
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
    });
};

module.exports = js;