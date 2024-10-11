describe('Login Test', () => {
  it('should allow user to log in with the login form with valid credentials', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('example@stud.noroff.no');
    cy.get('#loginPassword').type('exampleexample');

    cy.get('#loginForm').submit();

    cy.get('body').should('have.class', 'logged-in');
  });

  it('should not allow user to submit the login form with invalid credentials and shows a message', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('111@stud.noroff.no');
    cy.get('#loginPassword').type('11111111');

    cy.get('#loginForm').submit();

    cy.wait(2000);

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.contain('is incorrect');
    });
  });
});
