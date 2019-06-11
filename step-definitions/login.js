module.exports = function () {


    this.Given(/^User is on the IoT WebApp$/, function() {
        
        helpers.loadPage('https://iotproject31261.herokuapp.com');
        
      });

    this.Then(/^User logs in using an valid email$/, function() {

        driver.findElement(by.id('email_field')).sendKeys('henrydinh@uts.edu.au');
        
    });

    this.Then(/^User logs in using an valid password$/, function() {

        driver.findElement(by.id('password_field')).sendKeys('password');

        driver.findElement(by.id('login_button')).click();
    });

    this.Then(/^User logs in using an invalid email$/, function() {

        driver.findElement(by.id('email_field')).sendKeys('georges@uts.edu.au');
        
    });

    this.Then(/^User logs in using an invalid password$/, function() {

        driver.findElement(by.id('password_field')).sendKeys('kebabshop');

        driver.findElement(by.id('login_button')).click();
    });

    this.Then(/^User is taken to the dashboard$/, function() {

        driver.findElement(by.id('logout_button')).click();
    });

    this.Then(/^User remains on the login screen$/, function() {
        
        driver.findElement(by.id('login_button')).click();

   });


    
};