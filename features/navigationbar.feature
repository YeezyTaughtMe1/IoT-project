# ./features/navigationbar.feature
@navBar
Feature: Navigation Bar functionality for IoTWebApp

Background: 
	Given User is on and logged into the IoT WebApp

Scenario: User is taken to the LED Light section of the page after clicking the LED link in the navigation bar
  When User clicks on the LED link in the navigation bar
  Then User is taken to the LED section 

Scenario: User is taken to the motion sensor section of the page after clicking the LED link in the navigation bar
  When User clicks on the motion sensor link in the navigation bar
  Then User is taken to the motion sensor section 

Scenario: User is taken to the u. range sensor section of the page after clicking the LED link in the navigation bar
  When User clicks on the u. range sensor link in the navigation bar
  Then User is taken to the u. range sensor section 

Scenario: User is taken to the 7 segment display section of the page after clicking the LED link in the navigation bar
  When User clicks on the 7 segment display link in the navigation bar
  Then User is taken to the 7 segment display section 

