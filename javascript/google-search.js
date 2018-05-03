/**
 * @fileoverview An example test that may be run using Mocha.
 * Usage: mocha -t 10000 selenium-webdriver/example/google_search_test.js
 */

var webdriver = require('selenium-webdriver'),
    firefox = require('selenium-webdriver/firefox'),
    By = webdriver.By,
    until = webdriver.until,
    test = require('selenium-webdriver/testing');

test.describe('Google Search', function () {
    var driver;

    test.before(function () {
        var options = new firefox.Options();
        options.addArguments(["start-fullscreen"]);

        driver = new webdriver.Builder()
            .forBrowser('firefox')
            .setFirefoxOptions(options)
            .build();
        driver.getCapabilities().then(function (caps) {
            console.log(caps);
        });
    });

    test.it('should append query to title', function () {
        driver.get('http://www.google.com');
        driver.findElement(By.name('q')).sendKeys('webdriver');
        driver.findElement(By.name('btnG')).click();
        driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    });

    test.after(function () {
        driver.quit();
    });
});