describe('Back Forward Kullanimi', () => {
    it('cypress.io sayfasina gidip tarayicida ileri geri komutlari', () => {
        cy.visit('https://www.cypress.io/')

        cy.get('nav > div > ul > li:nth-child(5) > a').click()
        cy.title().should('eq',"Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")//verify

        cy.go(-1)//back mainpage
        cy.title().should('eq',"JavaScript Component Testing and E2E Testing Framework | Cypress")
        cy.go(1)//pricing
        cy.title().should('eq',"Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing")//verify

    });
});