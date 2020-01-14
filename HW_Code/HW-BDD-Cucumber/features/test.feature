Feature: Add good to cart

  #  Searching for various goods and adding them to cart without buying

  # Background: Open eBay main page 
  
  # Then Ebay main page opened 
  
  Scenario: Add TV to cart
  Given I open eBay main page
  Given I input TV to searching bar and click Search button
  When I wait "10" seconds