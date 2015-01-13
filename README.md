gulpjob
=======

Front-end web development automation with node, gulp and compass.

What does it do
---------------
Optimizes __images__, concatenates and minifies __JS__, compiles and compresses __SCSS__ with libsass and handles __spriting__ with compass.

Installation
------------

You need [nodeJS](http://nodejs.org/download/) and [ruby compass](http://compass-style.org/install/). With npm added to your PATH environmental variables, the following command:

- ```npm install```

Example File Structure
----------------------

```
src
├── js
│   ├── _vendor
│   │   └── [vendor js files...]
│   ├── scripts.js (included and contactenated scripts)
│   ├── _included.js (included in the file above with gulp-include)
│   └── single-script.js (a single script file)
└── scss
    ├── _vendor
    │   └── [vendor scss files...]
    ├── styles.scss (included and contactenated styles)
    ├── _included.scss (included in the file above with sass @import)
    └── single-style.scss (a single style file)
```

Usage
-----
Install and run ```gulp```.
