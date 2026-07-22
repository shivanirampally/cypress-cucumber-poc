@roles
Feature: Role Based Access Validation

Scenario Outline: Validate user permissions

    Given User opens Secure Bank page
    When User logs in as "<account>"
    Then "<account>" permissions should be validated

    Examples:
    | account |
    | standard_user |
    | admin_user |