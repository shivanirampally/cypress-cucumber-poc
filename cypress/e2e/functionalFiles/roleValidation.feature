@roles
Feature: Role Based Access Validation

Scenario Outline: Validate user permissions

    Given User opens Secure Bank page
    When User logs in as "<account>"
    Then Dashboard should be displayed

    Examples:
    | account |
    | standard_user |
    | admin_user |