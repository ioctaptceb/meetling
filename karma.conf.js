module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'dist/app.js',
      'spec/unit/usersServiceSpec.js',
      'spec/unit/usersControllerSpec.js',
      'spec/unit/usersDirectiveSpec.js'
        ],

    autowatch: true,

    browserify: {
      watch: true,
      debug: true
    },


    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: ['karma-chrome-launcher',
              'karma-phantomjs-launcher',
              'karma-jasmine',
              'karma-junit-reporter'
              ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
