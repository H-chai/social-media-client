describe('Login Test', () => {
  it('should allow user to log in with the login form with valid credentials', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('example@stud.noroff.no');
    cy.get('#loginPassword').type('exampleexample');

    cy.get('#loginForm').submit();

    cy.get('.profile-name').should('contain', 'example');
  });
});
