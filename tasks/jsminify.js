
/**
 * Minify JS files and create maps
 *
 * @src concatenated JS file
 * @dest minified JS file and source map
 */

var jsminify = function(){

	gulp.task('jsminify', function () {
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

module.exports = jsminify;