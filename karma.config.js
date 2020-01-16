module.exports = function(config) {

  var browsers = ['PhantomJS'];

  /*if (process.env.TRAVIS) {
    browsers.push('Chrome_Travis');
  } else {
    browsers.push('Chrome');
  }*/

  config.set({
    singleRun: true,

    browsers: browsers,

    customLaunchers: {
      Chrome_Travis: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular'
    ],

    reporters: ['progress', 'kjhtml'],

    /*coverageReporter: {
      type: 'json',
      subdir: '.',
      dir: 'dist/coverage/',
      file: 'coverage.json'
    },*/
    
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage/angularjs-webpack-starter'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ]
  });
};
