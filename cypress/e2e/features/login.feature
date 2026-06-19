Feature: Role Based Access

Scenario Outline: Verify Role Access

  Given User opens Secure Bank page
  When User logs in as "<role>"
  Then "<role>" user should be logged in successfully

Examples:
| role   |
| admin  |
| viewer |