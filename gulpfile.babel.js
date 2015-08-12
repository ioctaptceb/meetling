import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import rimraf from 'rimraf';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';
let reload = browserSync.reload;
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import jasmine from 'gulp-jasmine';
import karma from 'karma';
let Server = karma.Server;

const config = {
  entryFile: './src/app.js',
  outputDir: './dist/',
  outputFile: 'app.js',
  baseDir: './'
};

let bundler;
function getBundler() {
  if (!bundler) {
    bundler = watchify(browserify(config.entryFile, watchify.args));
  }
  return bundler;
}

function bundle()  {
  return getBundler()
    .transform(babelify)
    .bundle()
    .on('error', function(err) { console.log("Error message: " + err.message); })
    .pipe(source(config.outputFile))
    .pipe(gulp.dest(config.outputDir));
}

gulp.task('clean', function(cb) {
  return rimraf(config.outputDir, cb);
});

gulp.task('build-persistant', ['clean'], () => { return bundle(); });

gulp.task('build', ['build-persistant'], () => { process.exit(0); });

gulp.task('watch', ['build-persistant'], () => {
  browserSync({
    server: {
      baseDir: config.baseDir
    }
  });

  getBundler().on('update', () => {
    gulp.start('build-persistant');
  });

});

gulp.task('js-exporter', () => {
  gulp.src('src/*.js')
    .pipe(babel())
    .pipe(concat('app2.js'))
    .pipe(gulp.dest('./dist'));
  });

gulp.task('jasmine', ['js-exporter'], () => {
  gulp.src('spec/unit/*.js')
    .pipe(jasmine());
  });

gulp.task('karmunit', ['build-persistant'], () => {
  new Server({
    configFile: './karma.conf.js',
    singleRun: true
    }, done).start();
  });
