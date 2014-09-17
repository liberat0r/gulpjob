/**
 * Run JS tasks
 */

var js = function() {

	gulp.task('js', ['js_concat', 'js_hint'], function() {
		return gulp.start('js_minify');
	});
};

/**
 * Error reporter
 *
 */
/*var jsErrorReporter = gulpPlugin.map(function (file, callback) {

 *//* todo: console logs -> notify *//*
 if (!file.jshint.success) {
 console.log('JSHINT Errors ' + file.path);

 file.jshint.results.forEach(function (err) {
 if (err) {
 console.log( 'L:' + err.error.line + ' C:' + err.error.character + ' ' + err.error.raw + ' (' + err.error.evidence + ')');
 }
 });
 }
 callback(null, file);
 });*/

/**
 * Show JS errors with notifier
 *
 * @src JS files
 */

var js_hint = function() {

	gulp.task('js_hint', function() {
		return gulp.src(files.src.js_hint)
			.pipe(gulpPlugin.gulpPlumber({
				errorHandler: displayError
			}))
			.pipe(gulpPlugin.jshint())
			.pipe(gulpPlugin.jshint.reporter('default'));
		/*.pipe(jsErrorReporter);*/
	});
};

/**
 * Concatenate JS files and create source map
 *
 * @src JS files
 * @dest concatenated JS file and source map
 */

var js_concat = function() {

	gulp.task('js_concat', function() {
		return gulp.src(files.src.js)
			.pipe(gulpPlugin.gulpPlumber({
				errorHandler: displayError
			}))
			.pipe(gulpPlugin.include())
			.pipe(gulpPlugin.concat_sourcemap('scripts.js', {
				sourceRoot: paths.src.sourcemaps_root
			}))
			.pipe(gulp.dest(paths.dist.js))
			.pipe(gulpPlugin.notify({
				message: "JavaScript Concatenated",
				onLast : true
			}));
	});
};


module.exports.js = js;
module.exports.js_concat = js_concat;
module.exports.js_hint = js_hint;