var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    transform = require('vinyl-transform'),
    bower = require('gulp-bower'),
    print = require('gulp-print'),
    source = require('vinyl-source-stream'),
    babel = require('gulp-babel'),
    babelify = require('babelify');

gulp.task('styles', function() {
  return sass('assets/stylesheets/application.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return browserify({
    entries: 'assets/javascripts/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify.configure({
      optional: ["es7.decorators"]
  }))
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('transpile', function() {
  return gulp.src('es6/**/*.js').pipe(babel({ optional: ['es7.decorators'] }))
    .on('error', function() {
      console.log('babel error :(');
      this.emit('end');
    })
    .pipe(gulp.dest('es5'));
})

gulp.task('watch', function() {
  gulp.watch('assets/stylesheets/**/*.scss', ['styles']);
  gulp.watch('es6/**/*.js', ['transpile']);
  gulp.watch('assets/javascripts/**/*.js', ['scripts']);
  gulp.watch('es6/react_components/**/*.js', ['scripts']);
});

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('default', ['watch', 'scripts', 'styles', 'transpile']);
gulp.task('build', ['scripts', 'styles', 'transpile']);
