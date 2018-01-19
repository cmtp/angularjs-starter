// Karma configuration
// Generated on Thu Jan 18 2018 14:19:40 GMT-0400 (SA Western Standard Time)
var data = require('./gulp-config.json');
var files = getData(data);
files.push('src/**/*.spec.js');
console.log(files);

function getData(data) {
  let firstArray = data.vendors.mocks;
  //result.push('node_modules/angular-mocks/angular-mocks.js');
  let result = firstArray.concat(data.js);
  return result;
}
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: files,


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
