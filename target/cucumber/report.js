$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AlternateWayLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login Functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AlternateLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user enters Bank\u0026Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters New customer button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User land on New Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters \"\u003cAccountTitle\u003e\" and \"\u003cInitialBalance\u003e\" and \"\u003caccountNUmber\u003e\" and \"\u003cphoneNumber\u003e\" and \"\u003caccountDescription\u003e\"and \"\u003cContactPer\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on the Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "account should be created",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "AccountTitle",
        "InitialBalance",
        "accountNUmber",
        "phoneNumber",
        "accountDescription",
        "ContactPer"
      ],
      "line": 20,
      "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "SHAMIM",
        "1000",
        "123456",
        "987654",
        "checking",
        "Same as Title"
      ],
      "line": 21,
      "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2983235300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios Login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@AlternateLogin"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "The user enters Bank\u0026Cash button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User enters New customer button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User land on New Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters \"SHAMIM\" and \"1000\" and \"123456\" and \"987654\" and \"checking\"and \"Same as Title\"",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click on the Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "account should be created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_userName_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_signin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.User_should_land_on_Dashboard_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.the_user_enters_Bank_Cash_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_enters_New_customer_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_land_on_New_Account_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "SHAMIM",
      "offset": 13
    },
    {
      "val": "1000",
      "offset": 26
    },
    {
      "val": "123456",
      "offset": 37
    },
    {
      "val": "987654",
      "offset": 50
    },
    {
      "val": "checking",
      "offset": 63
    },
    {
      "val": "Same as Title",
      "offset": 77
    }
  ],
  "location": "StepDefinition.user_enters_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_the_Save_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.account_should_be_created()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2840792600,
  "status": "passed"
});
});