
// Watchers

var watch = function(){
    gulp.task('default', function () {

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