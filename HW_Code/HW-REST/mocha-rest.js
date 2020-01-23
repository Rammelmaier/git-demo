import { expect } from 'chai';
const request = require('request-promise');

function sendRestRequest(method) {
  var options = {
    uri: 'https://jsonplaceholder.typicode.com/users',
    method: method,
    resolveWithFullResponse: true,
  };

  return request(options).then(function(response) {
    return response;
  });
}

describe('REST Test', function(){
  describe('Checking Status Code', async function(){
    it('status code must be 200', async function(){
      return await sendRestRequest('GET').then(function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal('OK');
      });
    });
    

  });

});
//




await sendRestRequest('GET').then(function(response) {
  expect(response).to.include('header');
  expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
});