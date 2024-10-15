describe('Logout test', () => {
  it('should allow user to logout with the logout button', () => {
    cy.visit('https://social-media-client-h.netlify.app/');

    cy.get('button[data-auth="login"]').eq(1).click();

    cy.get('#loginEmail').type('example@stud.noroff.no', { force: true });
    cy.get('#loginPassword').type('exampleexample', { force: true });

    cy.get('#loginForm').submit();

    cy.wait(2000);

    cy.get('button[data-auth="logout"]').click();

    cy.url().should('eq', 'https://social-media-client-h.netlify.app/');

    cy.get('body').should('not.have.class', 'logged-in');
  });
});
