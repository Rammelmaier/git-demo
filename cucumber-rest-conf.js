require('babel-register')({
  presets: ['babel-preset-env'],
});

exports.config = {
  specs: ['HW_Code/HW-REST/feature/rest-test.feature'],
  framework: 'custom',
  cucumberOpts: {
    require: ['/HW_Code/HW-REST/features/step-definitions/*.js'], // require step definition files before executing features
    tags: false,
    profile: false,
    'no-source': true,
  },
};
