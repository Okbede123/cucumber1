$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registerAndLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Register and Login",
  "description": "I want to use this template for my feature file",
  "id": "register-and-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@createUserAndCustomer"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Register to system",
  "description": "",
  "id": "register-and-login;register-to-system",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@register_login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "get login page url \"https://demo.guru99.com/v4/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Open register open",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Input to email textbox with locator name \"emailid\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click to \"btnLogin\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Get User and Password info",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Back to Login page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Submit valid info to login userId and password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
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
  "duration": 21719646100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.openRegisterOpen()"
});
formatter.result({
  "duration": 3547227300,
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
  "duration": 267947899,
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
  "duration": 1646331000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.getUserAndPasswordInfo()"
});
formatter.result({
  "duration": 66338700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.backToLoginPage()"
});
formatter.result({
  "duration": 2453503100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.submitValidInfoToLogin()"
});
formatter.result({
  "duration": 5388473999,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.homePageDisplayed()"
});
formatter.result({
  "duration": 69173000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Create customer",
  "description": "",
  "id": "register-and-login;create-customer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@createCustomer"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "click to Add \"New Customer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input to \"Customer Name\" with value \"\u003cCustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click to Gender radio with value \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input to \"Date of Birth\" with value \"\u003cDate of Birth Input\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "In input to Address with value \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I input to \"City\" with value \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I input to \"State\" with value \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I input to \"PIN\" with value \"\u003cPin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I input to \"Mobile Number\" with value \"\u003cMobile\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I input to \"E-mail\" with value \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I input to \"Password\" with value \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Success message displayed with \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "displayed value at \"Customer Name\" with \"\u003cCustomerName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "displayed value at \"Gender\" with \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "displayed value at \"Birthdate\" with \"\u003cDate of Birth OutPut\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "displayed value at \"Address\" with \"\u003cAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "displayed value at \"City\" with \"\u003cCity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "displayed value at \"State\" with \"\u003cState\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "displayed value at \"Mobile No.\" with \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "displayed value at \"Email\" with \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "register-and-login;create-customer;",
  "rows": [
    {
      "cells": [
        "CustomerName",
        "Gender",
        "Date of Birth Input",
        "Address",
        "City",
        "State",
        "Pin",
        "Mobile",
        "Email",
        "Password",
        "Date of Birth OutPut"
      ],
      "line": 43,
      "id": "register-and-login;create-customer;;1"
    },
    {
      "cells": [
        "Okbede",
        "f",
        "10/02/1996",
        "Ha noi",
        "VietNam",
        "Hai phong",
        "123123",
        "0999123123",
        "okbe@gmail.com",
        "123123",
        "1996-10-02"
      ],
      "line": 44,
      "id": "register-and-login;create-customer;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Create customer",
  "description": "",
  "id": "register-and-login;create-customer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@createCustomer"
    },
    {
      "line": 1,
      "name": "@createUserAndCustomer"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "click to Add \"New Customer\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I input to \"Customer Name\" with value \"Okbede\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click to Gender radio with value \"f\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I input to \"Date of Birth\" with value \"10/02/1996\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "In input to Address with value \"Ha noi\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I input to \"City\" with value \"VietNam\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I input to \"State\" with value \"Hai phong\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I input to \"PIN\" with value \"123123\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I input to \"Mobile Number\" with value \"0999123123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I input to \"E-mail\" with value \"okbe@gmail.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I input to \"Password\" with value \"123123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click to \"submit\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify Success message displayed with \"Customer Registered Successfully!!!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "displayed value at \"Customer Name\" with \"Okbede\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "displayed value at \"Gender\" with \"female\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "displayed value at \"Birthdate\" with \"1996-10-02\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "displayed value at \"Address\" with \"Ha noi\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "displayed value at \"City\" with \"VietNam\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "displayed value at \"State\" with \"Hai phong\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "displayed value at \"Mobile No.\" with \"\u003cPhone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "displayed value at \"Email\" with \"okbe@gmail.com\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "New Customer",
      "offset": 14
    }
  ],
  "location": "HomePageSteps.clickToAdd(String)"
});
formatter.result({
  "duration": 1107205500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 12
    },
    {
      "val": "Okbede",
      "offset": 39
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 214437400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "f",
      "offset": 36
    }
  ],
  "location": "CommonPageSteps.iClickToRadioWithValue(String)"
});
formatter.result({
  "duration": 90276401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Date of Birth",
      "offset": 12
    },
    {
      "val": "10/02/1996",
      "offset": 39
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 174524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha noi",
      "offset": 32
    }
  ],
  "location": "CommonPageSteps.inInputToWithValue(String)"
});
formatter.result({
  "duration": 136833100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 12
    },
    {
      "val": "VietNam",
      "offset": 30
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 170712499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 12
    },
    {
      "val": "Hai phong",
      "offset": 31
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 169280399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PIN",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 29
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 172232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Number",
      "offset": 12
    },
    {
      "val": "0999123123",
      "offset": 39
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 171578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-mail",
      "offset": 12
    },
    {
      "val": "okbe@gmail.com",
      "offset": 32
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 182489600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 12
    },
    {
      "val": "123123",
      "offset": 34
    }
  ],
  "location": "CommonPageSteps.iInputToWithValue(String,String)"
});
formatter.result({
  "duration": 173734101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 10
    }
  ],
  "location": "CommonPageSteps.clickToButton(String)"
});
formatter.result({
  "duration": 3586686700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Registered Successfully!!!",
      "offset": 39
    }
  ],
  "location": "CommonPageSteps.verifySuccessMessageDisplayedWith(String)"
});
formatter.result({
  "duration": 34505800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Name",
      "offset": 20
    },
    {
      "val": "Okbede",
      "offset": 41
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 29672201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gender",
      "offset": 20
    },
    {
      "val": "female",
      "offset": 34
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 30590600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birthdate",
      "offset": 20
    },
    {
      "val": "1996-10-02",
      "offset": 37
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 41420000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address",
      "offset": 20
    },
    {
      "val": "Ha noi",
      "offset": 35
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 35008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "City",
      "offset": 20
    },
    {
      "val": "VietNam",
      "offset": 32
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 30707000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "State",
      "offset": 20
    },
    {
      "val": "Hai phong",
      "offset": 33
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 30103800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile No.",
      "offset": 20
    },
    {
      "val": "\u003cPhone\u003e",
      "offset": 38
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 30694400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 20
    },
    {
      "val": "okbe@gmail.com",
      "offset": 33
    }
  ],
  "location": "CommonPageSteps.displayedValueAtWith(String,String)"
});
formatter.result({
  "duration": 47645599,
  "status": "passed"
});
});