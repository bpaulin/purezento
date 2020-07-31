// https://docs.cypress.io/api/introduction/api.html

describe("Page access", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("body", "Purezento");
  });
});
