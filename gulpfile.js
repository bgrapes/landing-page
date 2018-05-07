var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

// Compile Sass into CSS and inject updated styles into browser
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Get all .scss files in app/scss or child directories
  .pipe(sass()) // Convert Sass to CSS with gulp-sass plugin
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true // Inject new styles into the browser when the sass task is ran
  }))
});

// Check for file changes and refresh browser
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// Spin up a server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

// Concatenate and minify JS and CSS files
gulp.task('useref', function() {
  return gulp.src('app/*.html')
  .pipe(useref())
  .pipe(gulpIf('*.js', uglify())) // Minifies only if it's a JS file
  .pipe(gulpIf('*.css', cssnano())) // Minifies only if it's a CSS file
  .pipe(gulp.dest('dist'))
});

// Optimize images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(cache(imagemin([
    imagemin.jpegtran({progressive: true})
  ])))
  .pipe(gulp.dest('dist/images'))
});

// Copy favicon from 'app' to 'dist'
gulp.task('favicon', function() {
  return gulp.src('app/*.ico')
  .pipe(gulp.dest('dist/'))
});

// Copy webfonts from 'app' to 'dist'
gulp.task('webfonts', function() {
  return gulp.src('app/webfonts/**/*')
  .pipe(gulp.dest('dist/webfonts'))
});

// Delete the 'dist' folder
gulp.task('clean', function() {
  return del.sync('dist');
});

// Clear local cache
gulp.task('clear', function() {
  return cache.clearAll();
});

// Create the 'dist' folder for the production site
gulp.task('build', function(callback) {
  runSequence('clean',
    [`sass`, `useref`, `images`, `webfonts`, `favicon`],
    callback
  )
});

// Compile Sass into CSS while watching HTML and JS files for changes
gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch']),
  callback
});