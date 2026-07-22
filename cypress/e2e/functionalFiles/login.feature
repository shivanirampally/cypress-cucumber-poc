@login
Feature: Secure Bank Login

  Scenario: Verify successful login with valid credentials

    Given User opens Secure Bank page
    Then Login page should be displayed
    
    When User logs in as "standard_user"
    Then Dashboard should be displayed

   