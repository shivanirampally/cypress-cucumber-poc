Feature: Login Validation

Scenario Outline: Verify Login Validation

  Given User opens Secure Bank page

  When User enters username "<username>" and password "<password>"

  Then Login result should be "<result>"

Examples:
| username | password | result  |
| admin    | admin123 | success |
| admin    | wrong123 | failure |
|          | admin123 | failure |
| admin    |          | failure |