describe('Login Test', () => {
  it('should allow user to log in with the login form with valid credentials', () => {
    cy.visit('https://social-media-client-h.netlify.app/');

    cy.wait(1000);

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get('#loginEmail').should('be.visible');
    cy.get('#loginEmail').type('example@stud.noroff.no', { force: true });

    cy.get('#loginPassword').should('be.visible');
    cy.get('#loginPassword').type('exampleexample', { force: true });

    cy.get('#loginForm').submit();

    cy.get('body').should('have.class', 'logged-in');
  });

  it('should not allow user to submit the login form with invalid credentials and shows a message', () => {
    cy.visit('https://social-media-client-h.netlify.app/');

    cy.wait(1000);

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get('#loginEmail').type('111@stud.noroff.no', { force: true });
    cy.get('#loginPassword').type('11111111', { force: true });

    cy.get('#loginForm').submit();

    cy.wait(2000);

    cy.get('.error-message').should('contain', 'is incorrect');
  });
});
