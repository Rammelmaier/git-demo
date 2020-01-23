Feature: Testing REST API

   Small REST API tests

  Scenario: Checking Status Code
   Given I send request to server and check Status code
  
  Scenario: Checking Header
  Given I send request to server and check Header

  Scenario: Checking Body 
  # Given I send request to server and check Body
  

# run: npm run rest-test-cuc -- --specs="HW_Code/HW-REST/feature/rest-test.feature"