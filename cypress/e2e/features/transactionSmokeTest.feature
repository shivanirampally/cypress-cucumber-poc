@smoke
Feature: Transaction Smoke Test

Scenario: Admin creates a transaction successfully

  Given User opens QA Playground website
  When User navigates to Secure Bank application
  And User logs in as "admin"

  Then New Transaction button should be visible

  When User opens New Transaction popup
  And User fills transaction details
  And User submits transaction

  Then Transaction should be created successfully


Scenario: Admin cancels transaction creation

  Given User opens QA Playground website
  When User navigates to Secure Bank application
  And User logs in as "admin"

  Then New Transaction button should be visible

  When User opens New Transaction popup
  And User fills transaction details
  And User clicks Cancel button

  Then Transaction popup should be closed