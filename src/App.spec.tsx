import App from "./App";
import { mount } from "@cypress/react";

it("renders learn react link", () => {
  mount(<App />);
  cy.contains(/main app/i).should("be.visible");
});
