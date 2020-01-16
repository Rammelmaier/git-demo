require('babel-register')({
  presets: ['babel-preset-env'],
});

exports.config = {
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  capabilities: {
    browserName: 'chrome',
  },

  directConnect: true,

  specs: [''],

  // SELENIUM_PROMISE_MANAGER: true,

  // cucumber command line options
  cucumberOpts: {
    require: ['/HW_Code/HW-BDD-Cucumber/features/step_definitions/*.js'], // require step definition files before executing features
    tags: false, // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    //strict: true, // <boolean> fail if there are any undefined or pending steps
    // format: 'pretty', // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //'dry-run': false, // <boolean> invoke formatters without executing steps
    //compiler: [], // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    profile: false,
    'no-source': true,
  },
};
