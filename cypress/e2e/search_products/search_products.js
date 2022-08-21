import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../page_objects/HomePage";
const homepage = new HomePage();

Given("the user is on this category page", function () {
    cy.visit(Cypress.env("url"));
});

When("no further options are clicked", function () {
    // no actions
});

Then("{int} products should be displayed", function (count) {
    homepage.getProductCount().should("have.length", count);
});

When("the user changes Rows per page dropdown to 25", function () {
    homepage.getPaginationListBox().click();
    homepage.get25RowsPerPage().click();
});

When("user has clicked Show out of stock checkbox", function () {
    homepage.getOutOfStockCheckBox().click();
});

Then("at least {int} products should be displayed", function (count) {
    homepage.getProductCount().its('length').should("be.gt", count - 1);
});

When("use select low to high sort by option", function () {
    homepage.getSortByListBox().click();
    homepage.getLowToHigh().click();
});

Then("{int} products should be displayed in low to high price", function (count) {
    // validate ten't product price is more than first product price
});
