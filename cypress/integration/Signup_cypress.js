describe ('Second test', () => {
    it ('Successful sign up', () => {
        cy.visit ('https://eightythree.azurewebsites.net/');

        cy.contains('Sign up').click();

        let name = function () {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < 20; i++) {
                text += possible.charAt(Math.floor (Math.random() * possible.length));
            }

            return text;
        };

        cy.get('#Name').click().type(name());

        let email = function () {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (let i = 0; i < 10; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            return text + "@email.com";
        };

        cy.get('#Email').click().type(email());

        cy.get('#Password').click().type('12345678');
        cy.get('#Confirmation').click().type('12345678');

        cy.get('.raised > .ui').click();

        cy.contains('You successfully registered yourself').should('be.visible');
    });
});