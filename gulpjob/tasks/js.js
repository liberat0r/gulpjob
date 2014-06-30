
/**
 * Run JS tasks
 */

var js = function () {

    gulp.task('js', ['js_concat', 'js_hint'], function(){
        return gulp.start('js_minify');
    });
};

/**
 * Error reporter
 *
 */
/*
var jsErrorReporter = map(function (file, cb) {

  if (!file.jshint.success) {
    console.log('JSHINT fail in '+file.path);
    file.jshint.results.forEach(function (err) {
      if (err) {
        console.log(' '+file.path + ': line ' + err.line + ', col ' + err.character + ', code ' + err.code + ', ' + err.reason);
      }
    });
  }
  cb(null, file);
});*/

/**
 * Show JS errors with notifier
 *
 * @src JS files
 */

var js_hint = function(){

    gulp.task('js_hint', function () {
        return gulp.src(files.src.js)
            .pipe(gulpPlugin.jshint())
			.pipe(gulpPlugin.jshint.reporter('default'));
            /*.pipe(myReporter);*/
    });
};

/**
 * Concatenate JS files and create source map
 *
 * @src JS files
 * @dest concatenated JS file and source map
 */

var js_concat = function(){

    gulp.task('js_concat', function () {
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


/**
 * Minify JS files and create maps
 *
 * @src concatenated JS file
 * @dest minified JS file and source map
 */

var js_minify = function(){

    gulp.task('js_minify', function () {
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
    });
};

module.exports.js = js;
module.exports.js_concat = js_concat;
module.exports.js_minify = js_minify;
module.exports.js_hint = js_hint;