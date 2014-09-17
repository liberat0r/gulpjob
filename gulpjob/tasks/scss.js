/**
 * Compile CSS file from scss
 *
 * @src SCSS file that imports the rest
 * @dest CSS file and minified CSS file
 */

var scss = function() {

	gulp.task('scss', function() {
		return gulp.src(files.src.scss)
			.pipe(gulpPlugin.gulpPlumber({
				errorHandler: displayError
			}))
			.pipe(gulpPlugin.compass({
				css : paths.dist.css,
				sass: paths.src.scss,
			}))
			.pipe(gulp.dest(paths.dist.css))
			.pipe(gulpPlugin.notify("SCSS Recompiled"));
	});
};

module.exports = scss;