Cypress.Commands.add("openHomePage", (device) => {
  cy.viewport(device);

  cy.visit("/index.php");

  cy.get("#header_logo").should("be.visible");

  cy.url().should("eq", Cypress.config().baseUrl + "/index.php");
});

Cypress.Commands.add("login", (email, password) => {
  cy.get(".login").should("be.visible").click();

  cy.get("h1").contains("Authentication").should("be.visible");

  cy.url().should(
    "eq",
    Cypress.config().baseUrl +
      "/index.php?controller=authentication&back=my-account"
  );

  cy.get("#email").should("be.visible").type(email).should("have.value", email);

  cy.get("#passwd")
    .should("be.visible")
    .type(password)
    .should("have.value", password);

  cy.get("#SubmitLogin").should("be.visible").click();

  cy.get("h1").contains("My account").should("be.visible");

  cy.url().should(
    "eq",
    Cypress.config().baseUrl + "/index.php?controller=my-account"
  );
});
