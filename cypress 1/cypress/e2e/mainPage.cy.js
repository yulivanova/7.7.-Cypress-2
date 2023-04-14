const selector = require("../fixtures/selectors.json");

describe('home page', () => {
  it('checking the correct display of the main page', () => {
    cy.visit('http://qamid.tmweb.ru');
    cy.get(selector.title).should("contain.text", "Идёмвкино");
    cy.get(selector.weekDays).should("have.length", 7);
    cy.get(selector.chooseMovie).should("be.visible");
  });
});