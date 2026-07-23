@regression
Feature: SecureBank Regression

  Scenario Outline: Verify complete transfer flow for different user roles

    Given User opens QA Playground website
    Then Home page header should be displayed

    When User clicks on Demo Apps menu
    Then Demo Apps page should be displayed

    When User opens Bank Demo App
    Then Secure Bank Login page should be displayed

    When User logs in as "<account>"
    Then Dashboard should be displayed

    When User navigates to Transfer Money page
    And User enters transfer details
    Then Transfer review popup should be displayed

    When User confirms the transfer
    Then Transfer should be successful

    When User logs out
    Then Login page should be displayed

    Examples:
      | account        |
      | standard_user  |
      | admin_user     |