/// <reference types="Cypress" />
describe("My First Test", function () {
  it("Clicks the link", function () {
    cy.visit("/");
    cy.get("button").click();
    cy.get("button").should("contain", 1);
  });
});
