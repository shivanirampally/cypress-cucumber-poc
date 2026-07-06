@smoke
Feature: Smoke Flow

  Scenario: Admin runs smoke journey
    Given User opens QA Playground website
    Then Home page should be displayed

    When User scrolls to Bank Demo section
    Then Open Bank App button should be visible
    When User clicks on Open Bank App button
    Then User should be navigated to Secure Bank Demo page

    When User logs in as "admin"
    Then User role "admin" should be displayed

    Then New Transaction button should be visible
    When User opens New Transaction popup
    Then Transaction popup should be displayed
    When User fills transaction details
    When User submits transaction
    Then Transaction should be created successfully
