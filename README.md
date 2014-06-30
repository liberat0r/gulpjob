gulpjob
=======

Front-end web development automation with node, gulp and compass.

What does it do
---------------
Optimizes __images__, concatenates and minifies __JS__, compiles and compresses __SCSS__, handles __spriting__ with compass, and creates __sourcemaps__ for the above.

Installation
------------

You need [nodeJS](http://nodejs.org/download/) and [ruby compass](http://compass-style.org/install/). With npm added to your PATH environmental variables, run either of the following commands:

- ```npm install```
- ```install.bat``` windows batch file
- ```npm install gulp --global``` and ```npm install gulp gulp-uglifyjs gulp-compass gulp-concat-sourcemap gulp-autoprefixer gulp-minify-css gulp-notify gulp-rename gulp-clean gulp-jshint gulp-watch gulp-imagemin gulp-plumber map-stream --save-dev```

If you would like to receive notifications from gulp-notify, you must install [snarl](http://fullphat.net/) or [growl](http://growl.info/)

Usage
-----
Install and run ```gulp```.