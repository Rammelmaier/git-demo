let request = require('request-promise');
let diff = require('deep-diff').diff;

function sendRestRequestWithHeader() {
  var options = {
    uri: 'https://jsonplaceholder.typicode.com/users',
    // headers: header,
    resolveWithFullResponse: true,
  };

  return request.get(options);
}

// var HEADER = {
//   // 'Accept': 'application/json',
//   'Accept-Language': 'en-GB',
//   'Client-ID': 'AEM',
//   'User-Agent': 'chrome',
//   'Status-Code': '',
// };

// var person = {
//   name: 'Slava',
//   title: 'senior',
//   profession: 'programmer',
//   age: 27
// };

sendRestRequestWithHeader().then(function(responce) {
  // console.log(responce);
  console.log(responce.statusCode);
  console.log(responce.statusMessage);
  console.log(responce.headers['content-type']);
  // var differences = diff(JSON.stringify(person), responce);
  // if (differences !== undefined) {
  //   var errorMsg = "The two JSON do not match \n" + JSON.stringify(differences, null, '  ');
  //   throw new Error(errorMsg);
  // } else console.log('JSON comparison is succeed');
});

// run this! - node HW_Code/HW-REST/rest-test.js
