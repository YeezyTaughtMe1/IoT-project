module.exports = function () {


    this.Given(/^User is on the IoT WebApp$/, function() {
        
        return helpers.loadPage('https://iotproject31261.herokuapp.com');
        
      });

    this.When(/^User logs in using an valid email$/, function() {

         return driver.findElement(by.id('email_field')).sendKeys('henrydinh@uts.edu.au');
        
    });

    this.Then(/^User logs in using an valid password$/, function() {

        driver.findElement(by.id('password_field')).sendKeys('password');

        return driver.findElement(by.id('login_button')).click();
    });

    this.When(/^User logs in using an invalid email$/, function() {

        return driver.findElement(by.id('email_field')).sendKeys('georges@uts.edu.au');
        
    });

    this.Then(/^User logs in using an invalid password$/, function() {

       driver.findElement(by.id('password_field')).sendKeys('kebabshop');

       return driver.findElement(by.id('login_button')).click();

    });

    this.Then(/^User is taken to the dashboard$/, function() {

       //return driver.findElement(by.xpath("//div[@class="loggedin-div"]//div[@class="container"]//div[@id="logout_button"]")).click();
    });

    this.Then(/^User remains on the login screen$/, function() {
        
        return driver.findElement(by.id('login_button')).click();

   });


    
};