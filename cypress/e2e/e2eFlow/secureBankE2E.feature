@e2e
Feature: Secure Bank End To End Flow

Scenario: Admin and Viewer End To End Validation

    Given User opens QA Playground website

    When User navigates to Secure Bank application

    And User logs in as "admin"

    Then User role "admin" should be displayed

    And New Transaction button should be visible

    When User opens New Transaction popup

    Then Transaction popup should be displayed

    When User clicks Cancel button

    Then Transaction popup should be closed

    When User logs out

    And User logs in as "viewer"

    Then User role "viewer" should be displayed

    And New Transaction button should be visible

    When User opens New Transaction popup

    Then Transaction popup should be displayed

    When User clicks Cancel button

    Then Transaction popup should be closed

    When User logs out