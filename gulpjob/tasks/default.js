
// Watchers

var watch = function(){
    gulp.task('default', function () {

    	gulpPlugin.browserSync.init([paths.dist.css + '/*.css', paths.dist.js + '/*.js'], {
		});

        gulpPlugin.gulpWatch({ glob: watchFiles.scss },
            ['scss']);

        gulpPlugin.gulpWatch({ glob: watchFiles.sprites },
            ['sprites']);

/*        gulpPlugin.gulpWatch({ glob: watchFiles.images },
            ['image_min']);*/

        gulpPlugin.gulpWatch({ glob: watchFiles.js },
            ['js']);

    });
};

module.exports = watch;