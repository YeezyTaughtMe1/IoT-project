# ./features/login.feature
@login
Feature: Login functionality for IoTWebApp

Background: 
	Given User is on the IoT WebApp

Scenario: Verify that user is able to login by using a valid email and password
    When User logs in using valid email
    And User logs in using valid password
	Then User is taken to the dashboard

Scenario: Verify that user is not able to login by using an invalid email and password
	When User logs in using email georges@uts.com.au
    And User logs in using password kebabshop
	Then User remains on the login screen
	
