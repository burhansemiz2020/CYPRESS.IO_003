describe('Shadow and Find Usage', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {return false})
    });
    it('Shadow and Find using Example', () => {
        cy.visit('https://www.mercedes-benz.fr/passengercars.html')
        //agree to all buton
        cy.get('cmm-cookie-banner[settings-id="9OayLC_71"]').shadow()
        .find('cmm-buttons-wrapper[class="hydrated"]')
        .find('[data-test="handle-accept-all-button"]')
        .should('be.visible').contains('Accepter tout').click()
    });
});