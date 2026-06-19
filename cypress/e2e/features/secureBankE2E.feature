Feature: Secure Bank End To End Flow

Scenario: Admin and Viewer Login Validation

  Given User opens QA Playground website

  When User navigates to Secure Bank application

  And User logs in as "admin"

  Then User role "admin" should be displayed

  When User logs out

  And User logs in as "viewer"

  Then User role "viewer" should be displayed