const { id, username, firstName, lastName, email, password, phone, userStatus } = require("../fixtures/user.json");

describe('API test user', () => {
  it('user creation', () => {
    cy.creationUser(
       id[0], 
       username, 
       firstName, 
       lastName, 
       email, 
       password, 
       phone, 
       userStatus
    )
    .then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it('user edits id', () => {
    cy.creationUser(
       id[0], 
       username, 
       firstName, 
       lastName, 
       email, 
       password, 
       phone, 
       userStatus
    );
    cy.editsUser(
       id[1], 
       username, 
       firstName, 
       lastName, 
       email, 
       password, 
       phone, 
       userStatus
    )
    .then((response) => {
      expect(response.body.message).to.eq("2");
    });
  });

  it('deleting a user', () => {
    cy.creationUser(
       id[0], 
       username, 
       firstName, 
       lastName, 
       email, 
       password, 
       phone, 
       userStatus
    );
    cy.deleteUser(username)
    .then((response) => {
      expect(response.body.lastName).to.not.eq("Koh");
      expect(response.status).to.eq(200);
    });
  });
});