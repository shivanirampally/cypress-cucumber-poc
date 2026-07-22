@smoke
Feature: QA Demo Apps

  Scenario: Open Bank Demo Application

    Given User is on QA Demo Apps page
    Then QA Demo Apps page should be displayed
    And Bank Demo App card should be displayed
    When User opens Bank Demo App
    Then Secure Bank Login page should be displayed