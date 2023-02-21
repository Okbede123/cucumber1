@demobackground2
Feature: Datatable feature

  @datatable_step
  Scenario Outline: scenario new customer with username <Username>
#    Given Open facebook application
    When Input to Username And Password
    |User_name|Password|
    |<Username>|<Password>|
    And Click to Submit button
#    And Close application

    Examples:
      |Username|Password|
      |test1|1234|
      |test5|1236|





