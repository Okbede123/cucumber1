$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("dataTable.feature");
formatter.feature({
  "line": 2,
  "name": "Datatable feature",
  "description": "",
  "id": "datatable-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "scenario new customer with username \u003cUsername\u003e",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@datatable_step"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to Username And Password",
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "\u003cUsername\u003e",
        "\u003cPassword\u003e"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 11,
      "value": "#    And Close application"
    }
  ],
  "line": 13,
  "name": "",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 14,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;1"
    },
    {
      "cells": [
        "test1",
        "1234"
      ],
      "line": 15,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;2"
    },
    {
      "cells": [
        "test5",
        "1236"
      ],
      "line": 16,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2948411300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "scenario new customer with username test1",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 4,
      "name": "@datatable_step"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to Username And Password",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "test1",
        "1234"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPassword(DataTable)"
});
formatter.result({
  "duration": 316070700,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 78132701,
  "status": "passed"
});
formatter.after({
  "duration": 640105000,
  "status": "passed"
});
formatter.before({
  "duration": 2136860200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "scenario new customer with username test5",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 4,
      "name": "@datatable_step"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 7,
  "name": "Input to Username And Password",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "User_name",
        "Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "test5",
        "1236"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPassword(DataTable)"
});
formatter.result({
  "duration": 221450800,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 57982901,
  "status": "passed"
});
formatter.after({
  "duration": 620997600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "scenario new customer with username \u003cUsername\u003e",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@datatable_step1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 22
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 23
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 24
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "#    And Close application"
    }
  ],
  "line": 29,
  "name": "",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 30,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;1"
    },
    {
      "cells": [
        "test1",
        "1234"
      ],
      "line": 31,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;2"
    },
    {
      "cells": [
        "test5",
        "1236"
      ],
      "line": 32,
      "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2047470301,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "scenario new customer with username test1",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 18,
      "name": "@datatable_step1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 22
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 23
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 24
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordStep(DataTable)"
});
formatter.result({
  "duration": 578632401,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 53487600,
  "status": "passed"
});
formatter.after({
  "duration": 618349700,
  "status": "passed"
});
formatter.before({
  "duration": 2216252000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "scenario new customer with username test5",
  "description": "",
  "id": "datatable-feature;scenario-new-customer-with-username-\u003cusername\u003e;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 18,
      "name": "@datatable_step1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 21,
  "name": "Input to Username And Password step",
  "rows": [
    {
      "cells": [
        "User_name",
        "Pass_word"
      ],
      "line": 22
    },
    {
      "cells": [
        "test1",
        "123"
      ],
      "line": 23
    },
    {
      "cells": [
        "test2",
        "123"
      ],
      "line": 24
    },
    {
      "cells": [
        "test3",
        "123"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameAndPasswordStep(DataTable)"
});
formatter.result({
  "duration": 540610900,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 49576600,
  "status": "passed"
});
formatter.after({
  "duration": 610091600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Data Table in Scenario",
  "description": "",
  "id": "datatable-feature;data-table-in-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 34,
      "name": "@datable_scenario"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#      Given Open facebook application"
    }
  ],
  "line": 37,
  "name": "Input to Username textbox with \u003cUsername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Input to Password textbox with \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 40,
      "value": "#      And Close application"
    }
  ],
  "line": 41,
  "name": "",
  "description": "",
  "id": "datatable-feature;data-table-in-scenario;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 42,
      "id": "datatable-feature;data-table-in-scenario;;1"
    },
    {
      "cells": [
        "test1",
        "1234"
      ],
      "line": 43,
      "id": "datatable-feature;data-table-in-scenario;;2"
    },
    {
      "cells": [
        "test2",
        "12345"
      ],
      "line": 44,
      "id": "datatable-feature;data-table-in-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2230221599,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Data Table in Scenario",
  "description": "",
  "id": "datatable-feature;data-table-in-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 34,
      "name": "@datable_scenario"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#      Given Open facebook application"
    }
  ],
  "line": 37,
  "name": "Input to Username textbox with test1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Input to Password textbox with 1234",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToUsernameTextbox(String)"
});
formatter.result({
  "duration": 110085800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextbox(String)"
});
formatter.result({
  "duration": 110450699,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 59313499,
  "status": "passed"
});
formatter.after({
  "duration": 619851900,
  "status": "passed"
});
formatter.before({
  "duration": 2010531300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Data Table in Scenario",
  "description": "",
  "id": "datatable-feature;data-table-in-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    },
    {
      "line": 34,
      "name": "@datable_scenario"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 36,
      "value": "#      Given Open facebook application"
    }
  ],
  "line": 37,
  "name": "Input to Username textbox with test2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "Input to Password textbox with 12345",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test2",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToUsernameTextbox(String)"
});
formatter.result({
  "duration": 105933999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextbox(String)"
});
formatter.result({
  "duration": 111555300,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 58621400,
  "status": "passed"
});
formatter.after({
  "duration": 618290101,
  "status": "passed"
});
formatter.uri("demobeforeafter.feature");
formatter.feature({
  "line": 2,
  "name": "Verify Facebook login page",
  "description": "",
  "id": "verify-facebook-login-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@demobackground"
    }
  ]
});
formatter.before({
  "duration": 2198304001,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "scenario  have no parameter",
  "description": "",
  "id": "verify-facebook-login-page;scenario--have-no-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@no_param"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 8,
  "name": "Input to Username textbox",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Input to Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookSteps.inputToUsernameTextbox()"
});
formatter.result({
  "duration": 109606400,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.inputToPasswordTextbox()"
});
formatter.result({
  "duration": 154156200,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 92727201,
  "status": "passed"
});
formatter.after({
  "duration": 628223801,
  "status": "passed"
});
formatter.before({
  "duration": 2218069300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#    And Close application"
    }
  ],
  "line": 14,
  "name": "scenario have parameter",
  "description": "",
  "id": "verify-facebook-login-page;scenario-have-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@have_param_mark"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 16,
  "name": "Input to Username textbox with \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Input to Password textbox with \"123\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 32
    }
  ],
  "location": "FacebookSteps.inputToUsernameTextboxWith(String)"
});
formatter.result({
  "duration": 97778300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 32
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextboxWith(String)"
});
formatter.result({
  "duration": 105924400,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 59080100,
  "status": "passed"
});
formatter.after({
  "duration": 620743099,
  "status": "passed"
});
formatter.before({
  "duration": 2124942000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "#    And Close application"
    }
  ],
  "line": 22,
  "name": "scenario have parameter",
  "description": "",
  "id": "verify-facebook-login-page;scenario-have-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@have_param_no_mark"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 23,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 24,
  "name": "Input to Username textbox with test",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "Input to Password textbox with 123",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToUsernameTextbox(String)"
});
formatter.result({
  "duration": 107976700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 31
    }
  ],
  "location": "FacebookSteps.inputToPasswordTextbox(String)"
});
formatter.result({
  "duration": 110527901,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 58145900,
  "status": "passed"
});
formatter.after({
  "duration": 598682300,
  "status": "passed"
});
formatter.before({
  "duration": 2247344201,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#    And Close application"
    }
  ],
  "line": 30,
  "name": "scenario have parameter",
  "description": "",
  "id": "verify-facebook-login-page;scenario-have-parameter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@multiple_param"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 31,
      "value": "#    Given Open facebook application"
    }
  ],
  "line": 32,
  "name": "Input to Username with \"test\" And Input to Password with \"123\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Click to Submit button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 24
    },
    {
      "val": "123",
      "offset": 58
    }
  ],
  "location": "FacebookSteps.inputToUsernameWithAndInputToPasswordWith(String,String)"
});
formatter.result({
  "duration": 250787800,
  "status": "passed"
});
formatter.match({
  "location": "FacebookSteps.clickToSubmitButton()"
});
formatter.result({
  "duration": 58997900,
  "status": "passed"
});
formatter.after({
  "duration": 623169600,
  "status": "passed"
});
});