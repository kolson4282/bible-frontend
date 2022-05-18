describe("Check Layout", function () {
  before(() => {
    cy.visit("/");
  });
  it("Includes NavBar", function () {
    cy.get("nav")
      .should("be.visible")
      .within(() => {
        cy.get("h1").should("contain.text", "GraphQL Bible");
      });
  });
});
