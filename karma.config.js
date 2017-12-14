module.exports = function(config) {

  var browsers = ['PhantomJS'];

  if (process.env.TRAVIS) {
    browsers.push('Chrome_Travis');
  } else {
    browsers.push('Chrome');
  }

  config.set({
    singleRun: true,

    browsers: browsers,

    customLaunchers: {
      Chrome_Travis: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    frameworks: [
      'jasmine'
    ],

    files: [
      './src/index.spec.js'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      './src/index.spec.js': ['coverage', 'webpack', 'sourcemap'],
    },

    webpack: require('./webpack-test.config'),

    webpackMiddleware: {
      stats: 'errors-only'
    },

    coverageReporter: {
      type: 'json',
      subdir: '.',
      dir: 'build/coverage/',
      file: 'coverage.json'
    },

    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-sourcemap-loader')
    ]
  });
};