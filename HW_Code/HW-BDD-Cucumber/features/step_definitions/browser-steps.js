import PageFactory from '../../page-factory';
import { Given, When, Then, And } from 'cucumber';
import { elementIsPresent } from '../../Helpers/waiters';
import { browser } from 'protractor';
//const expect = require('jasmine');
//const assert = require('assert');
import { expect } from 'chai';

const MAINPAGE = PageFactory.getPage('MainPage');

Given('I open eBay main page', function() {
  browser.waitForAngularEnabled(false);
  MAINPAGE.openMainPage();
});

Then('Ebay main page opened', function() {
  // expect(elementIsPresent(MAINPAGE.getKeyElement(), 2000)).toBe(true);
  // assert.equal(elementIsPresent(MAINPAGE.getKeyElement(), 2000), true);
  expect(elementIsPresent(MAINPAGE.getKeyElement())).to.eql(true);
});

Given('I input TV to searching bar and click Search button', function() {
  MAINPAGE.searchItem('TV');
  MAINPAGE.clickSearchButton();
  browser.sleep(3000);
});

Then(/I wait "(\d+)" seconds?/, function(time, callback) {
  browser.sleep(+time);
});
