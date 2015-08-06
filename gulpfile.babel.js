var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var config = {
  entryFile: './src/app.js',
  outputDir: './dist/',
  outputFile: 'app.js',
  baseDir: './'
};

var bundler;
function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify(config.entryFile, watchify.args));
  }
  return bundler;
}

function bundle() {
  return getBundler()
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log("Error message: " + err.message); })
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir));
}

gulp.task('build-persistant', function() {
  return bundle();
});

gulp.task('build', ['build-persistant'], function() {
  process.exit(0);
});

gulp.task('watch', ['build-persistant'], function() {
  browserSync({
    server: {
      baseDir: config.baseDir
    }
  });
  
  getBundler().on('update', function() {
    gulp.start('build-persistant');
  });

});
