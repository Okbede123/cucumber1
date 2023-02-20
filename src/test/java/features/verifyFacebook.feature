@dangnhap
Feature: Verify Facebook login page

  @no_param
  Scenario: scenario  have no parameter
    Given Open facebook application
    When Input to Username textbox
    And Input to Password textbox
    And Click to Submit button
    And Close application

    @have_param_mark
  Scenario: scenario have parameter
    Given Open facebook application
    When Input to Username textbox with "test"
    And Input to Password textbox with "123"
    And Click to Submit button
    And Close application

  @have_param_no_mark
  Scenario: scenario have parameter
    Given Open facebook application
    When Input to Username textbox with test
    And Input to Password textbox with 123
    And Click to Submit button
    And Close application

  @multiple_param
  Scenario: scenario have parameter
    Given Open facebook application
    When Input to Username with "test" And Input to Password with "123"
    And Click to Submit button
    And Close application

  @datatable_step
  Scenario Outline: scenario new customer with username <Username>
    Given Open facebook application
    When Input to Username And Password
    |User_name|Password|
    |<Username>|<Password>|
    And Click to Submit button
    And Close application

    Examples:
      |Username|Password|
      |test1|1234|
      |test5|1236|

  @datatable_step1
  Scenario Outline: scenario new customer with username <Username>
    Given Open facebook application
    When Input to Username And Password step
      |User_name|Pass_word|
      |test1|123|
      |test2|123|
      |test3|123|
    And Click to Submit button
#    And Close application

    Examples:
      |Username|Password|
      |test1|1234|
      |test5|1236|

    @datable_scenario
    Scenario Outline: Data Table in Scenario
      Given Open facebook application
      When Input to Username textbox with <Username>
      And Input to Password textbox with <Password>
      And Click to Submit button
      And Close application
      Examples:
        |Username|Password|
        |test1|1234|
        |test2|12345|




