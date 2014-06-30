
/**
 * Clean files that are not needed
 */

var clean = function () {

	gulp.task('clean', function(){
	    return gulp.src(files.clean)
            .pipe(gulpPlugin.gulpPlumber({
                errorHandler: displayError
            }))
	        .pipe(gulpPlugin.clean({force: true}));
	});
};

module.exports = clean;