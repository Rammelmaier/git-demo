const request = require('request-promise');

function sendRestRequest(URI, method) {
  var options = {
    uri: URI,
    method: method,
    resolveWithFullResponse: true,
  };

  return request(options).then(function(response) {
    return response;
  });
}

export default sendRestRequest();
