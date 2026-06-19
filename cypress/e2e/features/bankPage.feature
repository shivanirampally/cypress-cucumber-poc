Feature: Bank Demo Application

  Scenario: Navigate to Secure Bank Demo Page

    Given User opens QA Playground website
    When User scrolls to Bank Demo section
    Then Open Bank App button should be visible
    When User clicks on Open Bank App button
    Then User should be navigated to Secure Bank Demo page