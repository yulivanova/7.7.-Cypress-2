describe('API test user', () => {
  it('user creation', () => {
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: {
        id: 1,
        username: "Alexxx",
        firstName: "Alex",
        lastName: "Koh",
        email: "alexxx@yandex.ru",
        password: "qwer1234",
        phone: "89999999999",
        userStatus: 0
      }
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it('checking if a user has been added', () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Alexxx",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it('user edits', () => {
    cy.request({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/Alexxx",
      body: {
        id: 1,
        username: "Alexxx",
        firstName: "Alex",
        lastName: "Koh",
        email: "alexxx@yandex.ru",
        password: "zxcv0987",
        phone: "89999999999",
        userStatus: 0
      }
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it('user verification after amendments', () => {
    cy.request({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/Alexxx",
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
    });
  });

  it('deleting a user', () => {
    cy.request({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/Alexxx",
    }).then(({ status }) => {
      cy.log(status);
      expect(status).to.eq(200);
    });
  });
});