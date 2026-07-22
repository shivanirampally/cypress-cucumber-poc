@smoke
Feature: Transfer Money

Scenario: Verify user can transfer money

  Given User opens Home page
  When User navigates to Demo Apps
  And User opens Secure Bank
  And User logs in as "standard_user"
  Then Dashboard should be displayed
  And Dashboard cards should be displayed
  When User transfers money
  Then Transfer should be successful