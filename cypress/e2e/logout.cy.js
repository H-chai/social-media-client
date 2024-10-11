describe('Logout test', () => {
  it('should allow user to logout with the logout button', () => {
    cy.visit('http://127.0.0.1:5500/?view=profile&name=example');

    cy.get('button[data-auth="logout"]').click();

    cy.url().should('eq', 'http://127.0.0.1:5500/');

    cy.get('body').should('not.have.class', 'logged-in');
  });
});
