const { method } = require("cypress/types/bluebird");

describe('Temel Komutlar', () => {
    it('Temel Komutlar cy.visit kullanimi', () => {
        cy.visit("/")//baseUrl tanimlandiysa cypress.config.jes dosyasinin icinde 
        cy.visit("https://example.cypress.io/commands")//baseUrl tanimlanmadiysa direk buraya yazariz
        //eger basUrl tanimlanmissa ve bu sayfanin icinde bi yere gidilecekse / tan sonra gidilecek
        //sub page in yolu yazilir
        cy.visit("/commands")
        cy.visit({
            url: "http://example.cypress.io/", // baseUrl tanimlanamdiysa
            method: 'GET'
        })
    });
    it('Temel Komutlar cy.title kullanimi', () => {
        cy.title().should('eq',"cypress.io")//title tam esitlik olursa dogrular
        cy.title().should('include',"cypress")//title icerisinde cypress geciyorsa dogrular
        cy.title().should('contain',"cypress")//title icerisinde cypress geciyorsa dogrular
    });
    //url DOGRULAMA
    it('Temel Komutlar cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq', 'https://example.cypress.io/commands')//burada url tam esitlik durumunda dogrular
        cy.url().should('include','/commands')//burada url icerisinde commands geciyorsa dogrular
        cy.location('pathname').should('eq','/commands')//burada commands a gidiliyorsa location parantezi icinde pathname e gitmek gerekir
        //boylelikle path in dogrulanmasi saglaniyor
        cy.location('protocol').should('eq',"https")//burada ise gidilenprotocol dogrulamasi yapilir
        cy.location('hostname').should('eq',"http://example.cypress.io/")//burada ise tam esitlikte dogrulama yapilir
        cy.location('hostname').should('include',"cypress.io")//cypress.io icerirse hostname dogrular.
    });
    //cy.get TEMEL KOMUTTUR
    it('Temel Komutlar cy.get kullanimi', () => {
        cy.get("#button")//dogru kullanim
        cy.get('#buttin').as('button') // cy.get('@deneme')
        cy.get('a[href="exemple.cypress.io"]')
        cy.get('.dropdown-menu-list') //
        cy.get('div.button') //
        cy.get('ul li:first')
    
    });
    //CY.LOG cy.log() komutu ile bir log mesajı oluşturur. 
    //Bu mesaj, testin çalıştırıldığı anda Cypress 
    //komut satırında görüntülenecektir. 
    //Bu şekilde, testlerinizin çalışmasını takip edebilir 
    //ve hata ayıklama sürecinde kullanışlı bir araç olarak 
    //cy.log() komutunu kullanabilirsiniz.
    it('Temel Komutlar cy.log kullanimi', () => {
        cy.log('Temel Komutlar cy.log kullanimi')
        cy.log('be.visible')
        cy.log('bir mesaj', ['bir mesaj', 'iki mesaj', 'uc mesaj']) // Output: bir mesaj', ['bir mesaj', 'iki mesaj', 'uc mesaj']
    });

    //ONLY VE SKIP
    //EGER BIR IT BLOGUNUN BASINA "it.only" DERSENIZ SADECE BU BLOGU CALISTIRIRSINIZ
    //EGER BIR IT BLOGUNUN BASINA "it.skip" DERSENIZ BU BLOGU ATLAYARAK DIGER BLOGA GECER
    //EGER "describe.skip" DERSENIZ BU DESCRIBE ALTINDAKI HICBIR IT BLOGU CALISMAYACAK



});