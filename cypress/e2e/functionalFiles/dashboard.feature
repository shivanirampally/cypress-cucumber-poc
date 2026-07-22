@dashboard @regression
Feature: Dashboard Validation

    Background:
        Given User opens Secure Bank page
        When User logs in as "standard_user"

    Scenario: Verify dashboard components

        Then Dashboard should be displayed
        And Financial summary cards should be displayed
        And Quick actions should be displayed
        And Dashboard navigation menu should be displayed
        And Recent transactions section should be displayed