/**
 * Full build
 */

var build = function() {

	gulp.task('build', ['js', 'scss'], function() {
		return gulp.start('zip_dist');
	});

};

var zip_dist = function() {

	gulp.task('zip_dist', function() {
		return gulp.src(files.src.zip)
			.pipe(gulpPlugin.gulpPlumber({
				errorHandler: displayError
			}))
			.pipe(gulpPlugin.zip(files.dist.zip))
			.pipe(gulp.dest(paths.dist.zip))
			.pipe(gulpPlugin.notify({
				message: "Build Zipped"
			}));
	});

};

module.exports.build = build;
module.exports.zip_dist = zip_dist;