describe('Hizli test yazimi', () => {
    it('Hizli text yazimi testi', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('#message')
        .type("Cypress commands don't do anything at the moment they are invoked, but rather enqueue themselves to be run later. Commands can be chained commands together because Cypress manages a Promise chain on your behalf, with each command yielding a 'subject' to the next command, until the chain ends or an error is encountered.")
        
    });

    it('Hizli text yazimi testi 2', () => {
        cy.visit('https://automationexercise.com/contact_us')
        cy.get('#message')
        .type("Cypress commands don't do anything at the moment they are invoked, but rather enqueue themselves to be run later. Commands can be chained commands together because Cypress manages a Promise chain on your behalf, with each command yielding a 'subject' to the next command, until the chain ends or an error is encountered.",{delay: 0})
        
    });
});