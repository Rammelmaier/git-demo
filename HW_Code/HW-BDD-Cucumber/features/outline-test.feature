Feature: Add good to cart

   Searching for various goods and adding them to cart without buying

  Background: Open eBay main page 
   Given I open eBay main page
   Then Ebay main page opened

  Scenario Outline: Add smartphone to cart
   Given I input <GoodName> to searching bar and click Search button
   When I wait "3" seconds
   Then I click on first result
   Then I check result contains <GoodName>
   Then I check button add to cart available
   Then I choose <StorageCapacity> and <Colour>
   Then I add purchase to cart 
  #  Then I click on cart button 
   Then I check <GoodName> in cart appeared

 Examples:
 | GoodName  | StorageCapacity | Colour |
 | "iPhone"  |       1         |    3   |
 | "Android" |       0         |    3   |

 # run this! 
 # npm run testcuc -- --specs="HW_Code/HW-BDD-Cucumber/features/outline-test.feature"