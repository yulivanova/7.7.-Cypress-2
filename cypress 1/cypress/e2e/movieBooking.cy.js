const user = require("../fixtures/user.json");
const selector = require("../fixtures/selectors.json");
const seats = require("../fixtures/seats.json"); 

describe('booking a movie in an available hall', () => {
  it('booking tickets admin', () => {
    cy.visit('http://qamid.tmweb.ru/admin');
    cy.contains("Администраторррская").should("be.visible");
    cy.login(user.email, user.password);
    cy.contains(selector.deskForEqual).should("be.visible");
    cy.get(selector.testHall).then(($el) => $el.textContent).should('have.text','Терминатор-заржавел');
    cy.get(selector.testHall).invoke('text').then((text) => {
    cy.visit("/");
    cy.get(selector.chooseDay).click();
    cy.get(selector.filmName).should('have.text', text);
    cy.get(selector.chooseMovie).contains(selector.timeSession).click();
    cy.contains(selector.timeSessionForEqual).should("be.visible");
    seats.forEach((seat) => {
      cy.get(
        `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
      ).click();
    });
    cy.get(selector.booking).click();
    cy.contains(selector.successfully).should("be.visible");
    });
  });
});