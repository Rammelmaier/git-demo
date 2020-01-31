require('babel-register')({
  presets: ['babel-preset-env'],
});

const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: './statistic/screen-report/',
  filename: 'test-report.html',
  reportTitle: 'Protractor-Jasmine-EMail-Test',
  captureOnlyFailedSpecs: true,
  showSummary: true,
  showQuickLinks: true,
  reportFailedUrl: true,
  showConfiguration: true,
});

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    // chromeOptions: {
    //   args: [''],
    // },
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  //allScriptsTimeout: 5000,
  specs: [''],
  // specs: ['HW_Code/**/tests/**/*.js'],
  SELENIUM_PROMISE_MANAGER: true,
  // SELENIUM_PROMISE_MANAGER: false,

  // Protractor-Jasmine2-Screenshot-Reporter Configuration

  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
  },

  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
};
