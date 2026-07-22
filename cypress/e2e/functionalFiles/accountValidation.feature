@regression
Feature: Account Validation

Scenario Outline: Verify account access

Given User opens Secure Bank page

When User logs in as "<account>"

Then "<account>" account should be validated

Examples:

| account |
| standard_user |
| locked_user |
| frozen_user |
| overdraft_user |
| slow_user |
| error_user |
| admin_user |