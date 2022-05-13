/// <reference types="Cypress" />
describe("The Home Page", function () {
  it("Successfully Loads", function () {
    cy.visit("/");
    cy.get(".App").should("include.html", "Main App");
    cy.get("button").should("include.text", "Submit");
  });
});
