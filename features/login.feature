# ./features/login.feature
@login
Feature: Login functionality for IoTWebApp

Background: 
	Given User is on the IoT WebApp

Scenario: User is able to login by using a valid email and password
    When User logs in using an valid email
    And User logs in using an valid password
	Then User is taken to the dashboard

Scenario: User is not able to login by using an invalid email and password
	When User logs in using an invalid email
    And User logs in using an invalid password
	Then User remains on the login screen
	
