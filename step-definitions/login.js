module.exports = function () {


    this.Given(/^User is on the IoT WebApp$/, function() {
        
        helpers.loadPage('https://iotproject31261.herokuapp.com');
        
      });

    this.Then(/^User logs in using valid email$/, function() {

        driver.findElement(by.id('email_field')).sendKeys('henrydinh@uts.edu.au');
        
    });

    this.Then(/^User logs in using valid password$/, function() {

        driver.findElement(by.id('password_field')).sendKeys('password');

        driver.findElement(by.id('login_button')).click();
    });

    this.Then(/^User is taken to the dashboard$/, function() {
        
            // return the promise of an element to the following then.
            driver.findElement(by.id('switchLEDOn')).click();
  
    });

//    this.Then(/^User remains on the login screen$/, function() {

 //   });


    
};