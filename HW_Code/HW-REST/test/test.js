const expect = require('chai').expect;
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

describe('REST Test - Checking REST-response', function() {
  describe('Checking Status-code', async function() {
    it('code must be 200', async function() {
      return await sendRestRequest('GET').then(function(response) {
        expect(response.statusCode).to.equal(200);
        expect(response.statusMessage).to.equal('OK');
      });
    });
  });

  describe('Checking response-header', async function() {
    it('header "content-type" must present', async function() {
      return await sendRestRequest('GET').then(function(response) {
        expect(response.headers['content-type']).to.exist;
      });
    });
    it('header "content-type" must be equal to "application/json; charset=utf-8"', async function() {
      return await sendRestRequest('GET').then(function(response) {
        expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
      });
    });
  });

  describe('Checking response-body', async function() {
    it('body must contain array from 10 Users', async function() {
      return await sendRestRequest('GET').then(function(response) {
        let array = JSON.parse(response.body);
        expect(array.length).to.equal(10);
        console.log(array.length);
      });
    });
  });
});

// run it!
//npm run test-mocha
