
/**
 * Minify image files
 */

var images = function () {

	gulp.task('image_min', function(){
	    return gulp.src(files.src.images)
            .pipe(gulpPlugin.gulpPlumber({
                errorHandler: displayError
            }))
		    .pipe(gulpPlugin.imagemin({
			    	progressive: true,
				optimizationLevel: 4,
				use: [gulpPlugin.pngcrush()],
				interlaced: true
		    }))
/*		    .on('error', function (err) {
			    displayError(err);
		    })*/
		    .pipe(gulp.dest(paths.dist.images));
		    /*
		    
		    Notify bugs the image minification for some reason, 
		    so it's removed.
		    
		    .pipe(gulpPlugin.notify({
			    message: "Images Optimized",
			    onLast: true,
		    }));*/
	});
};

module.exports = images;
