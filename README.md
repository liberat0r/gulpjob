gulpjob--phonegap
=======

Phonegap development automation with node, gulp and compass.

What does it do
---------------
Concatenates __JS__, compiles __SCSS__ with compass, and creates __sourcemaps__ for the above.

Installation
------------

You need [nodeJS](http://nodejs.org/download/) and [ruby compass](http://compass-style.org/install/). With npm added to your PATH environmental variables, run either of the following commands:

- ```npm install```
- ```install.bat``` windows batch file
- ```npm install gulp --global
npm install gulp gulp-compass gulp-concat-sourcemap gulp-notify gulp-rename gulp-jshint gulp-watch gulp-plumber gulp-include map-stream browser-sync --save-dev
gulp -v```

If you would like to receive notifications from gulp-notify, you must install [snarl](http://fullphat.net/) or [growl](http://growl.info/)

Usage
-----
Install and run ```gulp```.
