import PageFactory from '../../page-factory';
import { Given, When, Then } from 'cucumber';
import { elementIsPresent } from '../../Helpers/waiters';
import { browser } from 'protractor';
//const expect = require('jasmine');
//const assert = require('assert');
import { expect } from 'chai';

const MAINPAGE = PageFactory.getPage('MainPage');
const SEARCHPAGE = PageFactory.getPage('SearchPage');
const RESULTPAGE = PageFactory.getPage('ResultPage');
const CARTPAGE = PageFactory.getPage('CartPage');

Given('I open eBay main page', async function() {
  browser.waitForAngularEnabled(false);
  await MAINPAGE.openMainPage();
});

Then('Ebay main page opened', async function() {
  // expect(elementIsPresent(MAINPAGE.getKeyElement(), 2000)).toBe(true);
  // assert.equal(elementIsPresent(MAINPAGE.getKeyElement(), 2000), true);
  expect(await MAINPAGE.ebayLogoIsPresent()).to.be.true;
});

Given(/I input "(\D+)" to searching bar and click Search button?/, async function(request) {
  await MAINPAGE.searchItem(request);
  await MAINPAGE.clickSearchButton();
  await browser.sleep(2000);
});

Then(/I wait "(\d+)" seconds?/, async function(time) {
  await browser.sleep(+time);
});

Then('I click on first result', async function() {
  await SEARCHPAGE.openFirstSearchResultPage();
});

Then(/I check result contains "(\D+)"?/, async function(keyWord) {
  await RESULTPAGE.checkResult(keyWord);
});

Then('I check button add to cart available', async function() {
  expect(await RESULTPAGE.addCartClickable()).to.be.true;
});

Then('I add purchase to cart', async function() {
  await RESULTPAGE.clickAddCartButton();
});

Then('I click on cart button', async function() {
  await RESULTPAGE.clickGoCartButton();
});

Then(/I check "(\D+)" in cart appeared?/, async function(keyWord) {
  expect(await CARTPAGE.checkCartItem(keyWord)).to.be.true;
});
