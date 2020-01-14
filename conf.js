require('babel-register')({
  presets: ['babel-preset-env'],
});

exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [''],
    },
  },
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  //allScriptsTimeout: 5000,
  specs: [''],
  // specs: ['HW_Code/**/tests/**/*.js'],
  SELENIUM_PROMISE_MANAGER: true,
};
