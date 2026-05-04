@smoke
Feature: SauceDemo Purchase Flow

  Scenario: User successfully purchases a product

    Given user is logged into SauceDemo
    When user selects the first product
    And user adds the product to cart
    And user navigates to cart
    And user proceeds to checkout
    And user enters checkout details
    And user completes the purchase
    Then order should be placed successfully
    And user should be redirected to inventory page