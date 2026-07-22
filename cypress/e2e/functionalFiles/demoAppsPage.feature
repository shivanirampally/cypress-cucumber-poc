@demoApps
Feature: Demo Apps

  Scenario: Verify Demo Apps Page

    Given User opens QA Playground website

    When User clicks on Demo Apps menu

    Then Demo Apps page should be displayed

    And Bank Demo App card should be displayed

    When User opens Bank Demo App

    Then Login page should be displayed