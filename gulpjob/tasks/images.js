
/**
 * Minify image files
 */

var images = function () {

	gulp.task('image_min', function(){
	    return gulp.src(files.src.images)
            .pipe(gulpPlugin.gulpPlumber())
		    .pipe(gulpPlugin.imagemin({
			    progressive: true,
		    }))
/*		    .on('error', function (err) {
			    displayError(err);
		    })*/
		    .pipe(gulp.dest(paths.dist.images))
		    .pipe(gulpPlugin.notify({
			    message: "Images Optimized",
			    onLast: true,
		    }));
	});
};

module.exports = images;