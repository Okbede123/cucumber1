@parameter
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
