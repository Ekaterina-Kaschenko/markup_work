var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


// Static server
gulp.task('serve', ['scripts', 'css'], function() {
  gulp.watch('./assets/css/*.css', ['css']);
  gulp.watch('./assets/scripts/**/*.js', ['scripts']);
  gulp.watch('*.html').on('change', browserSync.reload);

  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('css', function() {
  return gulp.src('./assets/css/*.css')
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
  return gulp.src('scripts/**/*.js')
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
