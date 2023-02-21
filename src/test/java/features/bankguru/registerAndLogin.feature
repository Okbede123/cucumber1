Feature: Register and Login
  I want to use this template for my feature file

  @register_login
  Scenario: Register to system
    Given get login page url "https://demo.guru99.com/v4/"
    When Open register open
    And Input to email textbox with locator name "emailid"
    And Click to "btnLogin"
    Then Get User and Password info
    When Back to Login page
    And Submit valid info to login userId and password
    Then Home page displayed