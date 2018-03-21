var {defineSupportCode} = require('cucumber');
var {By, until, Key} = require('selenium-webdriver');
var {expect} = require('chai');

defineSupportCode(function({Given, When, Then}) {

    Given(/^I am at the google search page$/, function (next) {
        this.driver.get('http://www.google.es');
        next();
    });

    Then(/^I should see some results$/, function (next) {
        this.driver.wait(until.elementLocated(By.css('div.g')));
        this.driver.findElements(By.css('div.g'))
            .then(function(elements) {
                expect(elements.length).to.not.equal(0);
                next();
            });
    });


    When(/^I input the text "([^"]*)"$/, function (text, next) {
        this.driver.findElement(By.name('q')).sendKeys(text);
        next();
    });

    When(/^I google it$/, function (next) {
        this.driver.findElement(By.name('q')).sendKeys(Key.ENTER)
            .then(function() {
                next();
            });
    });
});