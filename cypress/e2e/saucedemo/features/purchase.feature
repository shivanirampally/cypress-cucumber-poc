@smoke
Feature: SauceDemo Purchase Flow

  Scenario: User successfully purchases products

    Given user is logged into SauceDemo
    When user adds multiple products to cart
    And user navigates to cart
    And user proceeds to checkout
    And user enters checkout details
    And user completes the purchase
    Then order should be placed successfully
    And user should see order confirmation page