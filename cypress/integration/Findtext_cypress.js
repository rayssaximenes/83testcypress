describe('Heading test', () => {
    it('contains the correct title', () => {
        cy.visit('https://eightythree.azurewebsites.net/');

        cy.get('h1');

        cy.contains('Coding as an Art').should('be.visible');
   });
});