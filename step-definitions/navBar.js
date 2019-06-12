module.exports = function () {

    this.Given(/^User is on and logged into the IoT WebApp$/, function() {
        
        helpers.loadPage('https://iotproject31261.herokuapp.com');
        
        driver.findElement(by.id('email_field')).sendKeys('henrydinh@uts.edu.au');
        driver.findElement(by.id('password_field')).sendKeys('password');

        driver.findElement(by.id('login_button')).click();
      });

    this.When(/^User clicks on the LED link in the navigation bar$/, function() {

    });

    this.When(/^User clicks on the motion sensor link in the navigation bar$/, function() {

    });

    this.When(/^User clicks on the u. range sensor link in the navigation bar$/, function() {

    });

    this.When(/^User clicks on the 7 segment display link in the navigation bar$/, function() {

    });

    this.Then(/^User is taken to the LED section$/, function() {
        
    });

    this.Then(/^User is taken to the motion sensor section$/, function() {
        
    });

    this.Then(/^User is taken to the u. range sensor section$/, function() {
        
    });

    this.Then(/^User is taken to the 7 segment display section$/, function() {
        
    });



};