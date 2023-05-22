import { slowCypressDown } from 'cypress-slow-down'
const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName()

slowCypressDown(false)
describe('FakerJS Usage', () => {
    it('slowdown kullanimi', () => {
        cy.slowDown(3000)
        cy.visit('https://automationexercise.com/login')

        cy.get("input[data-qa='login-email']").type(fakeEmail)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
        cy.slowDownEnd()
    });

    it('slowdown ileornek test', () => {
        cy.visit('https://automationexercise.com/login')
        cy.get("input[data-qa='login-email']").type(fakeName)
        cy.get("input[data-qa='login-password']").type(fakePassword)
        cy.get("button[data-qa='login-button']").click()
        cy.get("input[data-qa='login-email']").invoke('prop', "validationMessage")
        .should('include', `Please include an '@' in the email address. '${fakeName}' is missing an '@'.`)
        
    });
})