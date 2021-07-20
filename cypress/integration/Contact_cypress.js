describe('Contact', () => {
    it ('send message', () => {
        cy.visit('https://eightythree.azurewebsites.net/');

        cy.get('.container > [href="/blog"]').click();
        cy.scrollTo('bottom');
        cy.get('.inverted > a.item').click();

        cy.get('#Name').click().type('Rayssa Loiola Ximenes');
        cy.get('#Email').click().type('rayssa.lx@hotmail.com');
        cy.get('#Message').click().type('Great blog!')

        cy.get('.form > .ui').click()

        cy.contains('You successfully have sent a message. We\'ll answer you soon.').should('be.visible');
    });
});