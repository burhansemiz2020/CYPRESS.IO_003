const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName()


describe('FakerJS Usage', () => {
    it('sample test with fakerjs', () => {
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
    });

    it('sample test with fakerjs test2', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
        cy.get("input[data-qa='login-email']").invoke('prop', "validationMessage")
        .should('include', `Please include an '@' in the email address. '${fakeName}' is missing an '@'.`)
        
    });
})