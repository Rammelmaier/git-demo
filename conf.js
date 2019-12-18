require("babel-register")({
  presets: ["babel-preset-env"]
});

exports.config = {
  framework: 'jasmine',
  capabilities: {
    'browserName': 'chrome'
  } ,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  //allScriptsTimeout: 5000,
  specs: ['HW_Code/**/tests/**/*.js'],
  SELENIUM_PROMISE_MANAGER: true,
}