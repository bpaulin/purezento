/// <reference types="Cypress" />
// https://docs.cypress.io/api/introduction/api.html

describe("Login and logout", () => {
  beforeEach(() => {
    cy.login("NOPE");
  });
  it("should be able for a user to log in and out", () => {
    cy.visit("/");

    cy.contains("[data-loginaction]", "Login");
    cy.get("[data-username]").should("not.exist");
    cy.get("[data-avatar]").should("not.exist");

    const getStore = () => cy.window().its("__store__");
    getStore().then((store) => {
      store.commit("setUser", { displayName: "my name" });
    });

    cy.contains("[data-loginaction]", "Logout");
    cy.contains("[data-username]", "my name");
    cy.get("[data-avatar]").find("img").should("exist");
  });
});
