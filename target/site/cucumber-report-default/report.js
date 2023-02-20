$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("verifyFacebook.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Facebook login page",
  "description": "",
  "id": "verify-facebook-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@dangnhap"
    }
  ]
});
formatter.scenarioOutline({
  "line": 50,
  "name": "scenario new customer with username \u003cUsername\u003e",
  "description": "",
  "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@datatable_step1"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Open facebook application",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 53
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 54
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 55
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 56
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Verify list data",
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 58
    },
    {
      "cells": [
        "\u003cUser_name\u003e",
        "\u003cPass_word\u003e"
      ],
      "line": 59
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 61,
      "value": "#    And Close application"
    }
  ],
  "line": 63,
  "name": "",
  "description": "",
  "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 64,
      "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;;1"
    },
    {
      "cells": [
        "test1",
        "1234"
      ],
      "line": 65,
      "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;;2"
    },
    {
      "cells": [
        "test5",
        "1236"
      ],
      "line": 66,
      "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 65,
  "name": "scenario new customer with username test1",
  "description": "",
  "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@datatable_step1"
    },
    {
      "line": 1,
      "name": "@dangnhap"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Open facebook application",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 53
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 54
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 55
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 56
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Verify list data",
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 58
    },
    {
      "cells": [
        "\u003cUser_name\u003e",
        "\u003cPass_word\u003e"
      ],
      "line": 59
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.openFacebookApplication()"
});
formatter.result({
  "duration": 9855003700,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordStep(DataTable)"
});
formatter.result({
  "duration": 566275300,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.verifyListData(DataTable)"
});
formatter.result({
  "duration": 2831000,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 45641000,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "scenario new customer with username test5",
  "description": "",
  "id": "verify-facebook-login-page;scenario-new-customer-with-username-\u003cusername\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 49,
      "name": "@datatable_step1"
    },
    {
      "line": 1,
      "name": "@dangnhap"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "Open facebook application",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 53
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 54
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 55
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 56
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "Verify list data",
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 58
    },
    {
      "cells": [
        "\u003cUser_name\u003e",
        "\u003cPass_word\u003e"
      ],
      "line": 59
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.openFacebookApplication()"
});
formatter.result({
  "duration": 5402261800,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordStep(DataTable)"
});
formatter.result({
  "duration": 554016100,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.verifyListData(DataTable)"
});
formatter.result({
  "duration": 99500,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 47638500,
  "status": "passed"
});
});