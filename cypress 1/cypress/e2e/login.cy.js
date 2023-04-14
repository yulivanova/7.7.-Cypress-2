const user = require("../fixtures/user.json");
const selector = require("../fixtures/selectors.json");

describe('admin login verification', () => {
  beforeEach(() => {
    cy.visit("http://qamid.tmweb.ru/admin");
  });

  it('admin login verification valid', () => {
    cy.login(user.email, user.password);
    cy.contains(selector.deskForEqual).should("be.visible");
  });

  it("admin login verification invalid email", () => {
    cy.login(user.invalidEmail, user.password);
    cy.contains(selector.error).should("be.visible");
  });

  it("admin login verification invalid password", () => {
    cy.login(user.email, user.invalidPassword);
    cy.contains(selector.error).should("be.visible");
  });
});
