@smoke
Feature: SecureBank Smoke Test

Scenario: Verify happy path of money transfer

  Given User opens QA Playground website
  Then Home page header should be displayed

  When User clicks on Demo Apps menu
  Then Demo Apps page should be displayed

  When User opens Bank Demo App
  Then Login page should be displayed

  When User logs in as "standard_user"
  Then Dashboard should be displayed

  When User navigates to Transfer Money page
  And User enters transfer details
  Then Transfer review popup should be displayed

  When User confirms the transfer
  Then Transfer should be successful

  When User logs out
Then Login page should be displayed