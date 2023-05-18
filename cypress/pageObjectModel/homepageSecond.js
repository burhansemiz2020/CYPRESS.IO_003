class HomepageSecond{
    navigate(){
        cy.visit('https://cypress.io')
        return this;
    }
    get pricingBtn(){
        return cy.get('nav > div > ul > li:nth-child(5) > a')
        
    }
}
export default new HomepageSecond()