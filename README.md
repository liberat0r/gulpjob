gulp-automation
===============

Front-end web development automation with node, gulp and compass.

Installation
--------------

You need to have a node-enabled environment and be able to access the node packet management commands. With npm added to your PATH environmental variables, run either of the following commands:

- ```npm install```
- ```install.bat``` windows batch file
- ```npm install gulp --global``` and ```npm install gulp gulp-uglifyjs gulp-compass gulp-concat-sourcemap gulp-autoprefixer gulp-minify-css gulp-notify gulp-rename gulp-clean --save-dev```

If you would like to receive notifications from gulp-notify, you must install snarl.

TODO
------

* ~~Move dependencies to package.json~~
* Watcher on change event not working
* ~~Modularize each task in external file~~
* Add image-min support
