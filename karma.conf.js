module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/controllers.js',
      'spec/unit/controllersSpec.js'
        ],

    autowatch: true,

    browserify: {
      watch: true,
      debug: true
    },


    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: ['karma-chrome-launcher',
              'karma-jasmine',
              'karma-junit-reporter'
              ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
