$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerAndLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Register and Login",
  "description": "I want to use this template for my feature file",
  "id": "register-and-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Register to system",
  "description": "",
  "id": "register-and-login;register-to-system",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@register_login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "get login page url \"https://demo.guru99.com/v4/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Open register open",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Input to email textbox with locator name \"emailid\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click to \"btnLogin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Get User and Password info",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Back to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Submit valid info to login userId and password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Home page displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.guru99.com/v4/",
      "offset": 20
    }
  ],
  "location": "LoginPageSteps.getLoginPageUrl(String)"
});
formatter.result({
  "duration": 6035489300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.openRegisterOpen()"
});
formatter.result({
  "duration": 1127721200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emailid",
      "offset": 42
    }
  ],
  "location": "RegisterPageSteps.inputToEmailTextbox(String)"
});
formatter.result({
  "duration": 433785300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "btnLogin",
      "offset": 10
    }
  ],
  "location": "RegisterPageSteps.clickToSubmit(String)"
});
formatter.result({
  "duration": 1108640700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.getUserAndPasswordInfo()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.backToLoginPage()"
});
formatter.result({
  "duration": 997570400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.submitValidInfoToLogin()"
});
formatter.result({
  "duration": 1457480000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.homePageDisplayed()"
});
formatter.result({
  "duration": 129907000,
  "status": "passed"
});
});