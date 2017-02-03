module.exports = function(config) {
  config.set({
    singleRun: true,
    
    browsers: [
      'PhantomJS'
    ],

    frameworks: [
      'jasmine'
    ],

    files: [
      './src/index.spec.ts'
    ],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      './src/index.spec.ts': ['coverage', 'webpack']
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
      require('karma-webpack')
    ]
  });
};