describe('Cypress Locator', () => {
    it('Html element locating', () => {
        cy.get('#user-name')//id locating 
        cy.get('#login-box')//class locating
        cy.get('input')//tag locating
        cy.get('input[name="user-name"]')//attribute locating
        cy.get('a:contains("Login")')//element that contains text locating
        cy.get('a').contains("Login")
        cy.contains('Login')

    
    });
});