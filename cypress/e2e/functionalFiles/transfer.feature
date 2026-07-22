@transfer
Feature: Transfer Money

  Background:
    Given User opens Secure Bank page
    And User logs in as "standard_user"

  Scenario: Transfer money between accounts

    When User navigates to Transfer Money page
    And User enters transfer details
    Then Transfer review popup should be displayed

    When User confirms the transfer
    Then Transfer should be successful