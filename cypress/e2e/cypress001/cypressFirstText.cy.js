describe('The first test with cypress', () => {
    it('first test', () => {
        cy.visit('https://automationexercise.com/')//baseUrl tanimlanmamistir
        cy.title().should('eq',"Automation Exercise")
        cy.url().should('eq','https://automationexercise.com/')
    });

    it('second test', () => {
        cy.visit('https://automationexercise.com/')//baseUrl tanimlanmamistir
        cy.title().should('include',"Automation")
        cy.url().should('include','https://automationexercise.com')
    });
    
});