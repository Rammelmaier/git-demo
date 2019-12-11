// conf.js
exports.config = {
  framework: 'jasmine',
  capabilities: {
    'browserName': 'chrome'
  } ,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  //allScriptsTimeout: 5000,
  specs: ['mailtst.js'],
  SELENIUM_PROMISE_MANAGER: true,
}