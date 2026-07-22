@regression
Feature: Login Validation

Scenario Outline: Verify login validation

Given User opens Secure Bank page

When User enters username "<username>" and password "<password>"

Then Login result should be "<result>"

Examples:

| username       | password     | result  |
| standard_user  | bank_sauce   | success |
| standard_user  | wrong123     | failure |
|                | bank_sauce   | failure |
| standard_user  |              | failure |