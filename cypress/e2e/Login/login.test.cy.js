/// <reference types="cypress" />
import Data from "../../support/data";

describe("Login tests", { tags: "@smoke" }, () => {
  it("Log in as already registered user", () => {
    cy.openHomePage(Data.device);

    cy.login(Data.registeredEmail, Data.registeredPassword);
  });
});
