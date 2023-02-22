@createUserAndCustomer
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

    @createCustomer
    Scenario Outline: Create customer
      When click to Add "New Customer"
      And I input to "Customer Name" with value "<CustomerName>"
      And I click to Gender radio with value "<Gender>"
      And I input to "Date of Birth" with value "<Date of Birth Input>"
      And In input to Address with value "<Address>"
      And I input to "City" with value "<City>"
      And I input to "State" with value "<State>"
      And I input to "PIN" with value "<Pin>"
      And I input to "Mobile Number" with value "<Mobile>"
      And I input to "E-mail" with value "<Email>"
      And I input to "Password" with value "<Password>"
      And Click to "submit" button
      Then Verify Success message displayed with "Customer Registered Successfully!!!"
      And displayed value at "Customer Name" with "<CustomerName>"
      And displayed value at "Gender" with "female"
      And displayed value at "Birthdate" with "<Date of Birth OutPut>"
      And displayed value at "Address" with "<Address>"
      And displayed value at "City" with "<City>"
      And displayed value at "State" with "<State>"
      And displayed value at "Mobile No." with "<Phone>"
      And displayed value at "Email" with "<Email>"



      Examples:
      |CustomerName|Gender|Date of Birth Input|Address|City|State|Pin|Mobile|Email|Password|Date of Birth OutPut|
      |Okbede|f|10/02/1996|Ha noi|VietNam|Hai phong|123123|0999123123|okbe@gmail.com|123123|1996-10-02|