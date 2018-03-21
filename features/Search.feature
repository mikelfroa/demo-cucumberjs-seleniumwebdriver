Feature: Searching for cucumbers
  As an internet user
  In order to find out more about cucumbers
  I want to be able to search for information about cucumbers

  Scenario: Google cucumber search
    Given I am at the google search page
    When I input the text "cucumberjs"
    And I google it
    Then I should see some results