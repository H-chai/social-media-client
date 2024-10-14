describe('Login Test', () => {
  it('should allow user to log in with the login form with valid credentials', () => {
    cy.visit('https://social-media-client-h.netlify.app/');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('example@stud.noroff.no');
    cy.get('#loginPassword').type('exampleexample');

    cy.get('#loginForm').submit();

    cy.get('body').should('have.class', 'logged-in');
  });

  it('should not allow user to submit the login form with invalid credentials and shows a message', () => {
    cy.visit('https://social-media-client-h.netlify.app/');

    cy.get('button[data-auth="login"]').first().click();

    cy.get('#loginEmail').type('111@stud.noroff.no');
    cy.get('#loginPassword').type('11111111');

    cy.get('#loginForm').submit();

    cy.wait(2000);

    cy.get('.error-message').should('contain', 'is incorrect');
  });
});
