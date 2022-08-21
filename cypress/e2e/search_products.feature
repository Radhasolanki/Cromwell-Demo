Feature: src - Search products with different filters

 @search-product
 Scenario: src.1 - Search with no filters
 Given the user is on this category page
 When no further options are clicked
 Then 10 products should be displayed

 @search-product
 Scenario: src.2 - Rows per page change to 25
 Given the user is on this category page
 When the user changes Rows per page dropdown to 25
 Then 25 products should be displayed

 @search-product
 Scenario: src.3 - Search with out of stock option
 Given the user is on this category page
 When the user changes Rows per page dropdown to 25
 And user has clicked Show out of stock checkbox
 Then at least 1 products should be displayed

@search-product
Scenario: src.4 - Search with low to high price
Given the user is on this category page
When use select low to high sort by option
Then 10 products should be displayed in low to high price
