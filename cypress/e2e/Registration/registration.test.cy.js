/// <reference types="cypress" />

import Data from "../../support/data";

describe("Register new user", { tags: ["smoke", "registration"] }, () => {
  it("Register new user using Man option ", () => {
    cy.openHomePage(Data.device);

    cy.get(".login").should("be.visible").click();

    cy.get("h1").contains("Authentication").should("be.visible");

    cy.url().should(
      "eq",
      Cypress.config().baseUrl +
        "/index.php?controller=authentication&back=my-account"
    );

    cy.get("#email_create")
      .should("be.visible")
      .type(Data.email)
      .should("have.value", Data.email);

    cy.get("#SubmitCreate")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#SubmitCreate").should("not.exist");
      });

    cy.get("h3").contains("Your personal information").should("be.visible");

    cy.url().should(
      "eq",
      Cypress.config().baseUrl +
        "/index.php?controller=authentication&back=my-account#account-creation"
    );

    cy.get("#uniform-id_gender1")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#uniform-id_gender1")
          .children("span")
          .should("be.visible")
          .and("have.class", "checked");
      });

    cy.get("#customer_firstname")
      .should("be.visible")
      .type(Data.firstName)
      .should("have.value", Data.firstName);

    cy.get("#customer_lastname")
      .should("be.visible")
      .type(Data.lastName)
      .should("have.value", Data.lastName);

    cy.get("#email").should("be.visible").and("have.value", Data.email);

    cy.get("#passwd")
      .should("be.visible")
      .type(Data.password)
      .should("have.value", Data.password);

    cy.get("#days").select("3").should("have.value", "3");

    cy.get("#months").select("3").should("have.value", "3");

    cy.get("#years").select("2000").should("have.value", "2000");

    cy.get("#uniform-newsletter")
      .should("be.visible")
      .click()
      .then(() => {
        cy.get("#uniform-newsletter")
          .children("span")
          .should("be.visible")
          .and("have.class", "checked");
      });

    cy.get("#firstname").should("be.visible").and("have.value", Data.firstName);

    cy.get("#lastname").should("be.visible").and("have.value", Data.lastName);

    cy.get("#address1")
      .should("be.visible")
      .type(Data.address)
      .should("have.value", Data.address);

    cy.get("#postcode")
      .should("be.visible")
      .type(Data.zipCode)
      .should("have.value", Data.zipCode);

    cy.get("#city")
      .should("be.visible")
      .type(Data.city)
      .should("have.value", Data.city);

    cy.get("#id_state").select("Arizona").should("have.value", "3");

    cy.get("#phone_mobile")
      .should("be.visible")
      .type(Data.phoneNumber)
      .should("have.value", Data.phoneNumber);

    cy.get("#alias")
      .should("be.visible")
      .clear()
      .type(Data.newAddress)
      .should("have.value", Data.newAddress);

    // cy.get("#submitAccount").should("be.visible").click();

    // cy.url().should(
    //   "eq",
    //   Cypress.config().baseUrl + "/index.php?controller=my-account"
    // );

    // cy.get("h1").contains("My account");
  });
});
