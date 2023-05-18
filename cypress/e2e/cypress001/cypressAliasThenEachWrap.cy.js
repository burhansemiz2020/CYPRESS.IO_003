describe('Alias, Then, Each, Wrap', () => {
    it('Usage example', () => {
        let itemlength

        cy.visit('https://shopist.io/')
        cy.get('.navigation a').as('NavbarMenus')//Alias example

        cy.get('@NavbarMenus').then(($el) => {
            itemlength=$el.length
        }).each(($el, index)=>{
        //cy.get('@NavbarMenus').should('be.visible')
            cy.get('@NavbarMenus').should('be.visible')
            cy.log('Navbar Menu ' + index + ": " + $el.text() ) 

            if ($el.text().includes('Bedding')) {
                cy.wrap($el).click()
            }
        })


    });
});