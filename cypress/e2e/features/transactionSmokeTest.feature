Feature: Transaction Smoke Test

Scenario: Admin creates a transaction successfully

  Given User opens QA Playground website
  When User navigates to Secure Bank application
  And User logs in as "admin"

  Then New Transaction button should be visible

  When User opens New Transaction popup
  And User creates a transaction

  Then Transaction should be created successfully