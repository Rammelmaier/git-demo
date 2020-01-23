import { Given, When, Then } from 'cucumber';
// import { sendRestRequest } from '../../Helpers/send-request-get-resp';
const request = require('request-promise');
import { expect } from 'chai';

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

// Scenario Steps

Given(/I send request to server and check Status code?/, async function() {
  return await sendRestRequest('GET').then(function(response) {
    expect(response.statusCode).to.equal(200);
    expect(response.statusMessage).to.equal('OK');
  });
});

Given(/I send request to server and check Header?/, async function() {
  return await sendRestRequest('GET').then(function(response) {
    expect(response).to.include('header');
    expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
  });
});

Given(/I send request to server and check Body?/, async function() {
  return await sendRestRequest('GET').then(function(response) {
    console.log();
  });
});
