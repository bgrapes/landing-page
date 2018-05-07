# Landing Page #
This is an example landing page. [View the build](http://landing-page.bg.surge.sh/) on Surge.

[<img src="http://bgrapes.com/img/landing-page-2.jpg" alt="An example landing page by Brian Grapes" width="600" />](http://landing-page.bg.surge.sh/)

## Technologies and Tools Used ##
* HTML5
* CSS3
* JavaScript
* jQuery
* [Animate.css](https://daneden.github.io/animate.css/) - CSS animation library
* [Bootstrap 4](https://getbootstrap.com/) - front end library
* [Browsersync](https://browsersync.io/) - synchronized browser testing
* [del](https://www.npmjs.com/package/del) - deletes old/unused files during build
* [cssnano](https://github.com/ben-eb/cssnano) - CSS minifier
* [Font Awesome](https://fontawesome.com/) - font and icon toolkit
* [GitHub](https://github.com/bgrapes/landing-page) - version control and source code management
* [Google Fonts](https://fonts.google.com/specimen/Montserrat) - web fonts
* [Gulp](https://gulpjs.com/) - task automation
* [gulp-cache](https://www.npmjs.com/package/gulp-cache) - caches images so they're only optimized once during build
* [imagemin](https://github.com/imagemin/imagemin) - image minifier
* [Sass](https://sass-lang.com/) - CSS preprocessor
* [UglifyJS](https://github.com/mishoo/UglifyJS2) - JavaScript minifier
* [useref](https://github.com/jonkemp/useref) - concatenates CSS and JavaScript files

## Explore the Source Code ##
View [/app/](app/) for the full source code. Here are some shortcuts to some important files:

* [app/index.html](app/index.html) - HTML file
* [app/scss/styles.scss](app/scss/styles.scss) - main stylesheet
* [app/js/main.js](app/js/main.js) - main JavaScript file

View [/dist/](dist/) for the minified code, ready for production.

## Installation and Development ##
1. Fork and clone the project.
2. Run `npm install` to install the [`package.json`](package.json) dependencies.
3. Run `gulp` to launch the site at http://localhost:3000 and watch for file changes.
4. Run `gulp build` to create a production-ready build in the [`dist`](dist/) directory.
5. Run `cd dist` and `surge` to deploy to [Surge](http://surge.sh), a static site hosting platform.

## See it in Action ##
[View the build](http://landing-page.bg.surge.sh/) on Surge.