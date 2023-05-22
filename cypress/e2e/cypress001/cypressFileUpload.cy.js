describe('Cypress File Upload', () => {
    it('Dosya Yukleme-1', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        cy.get('.logo-preview').attachFile({filePath:"burhan photo.png"}, {subjectType: 'drag-n-drop'})
    });
    it('Dosya Yukleme-2', () => {
        cy.visit('https://www.qrcode-monkey.com/')
        cy.get('div:nth-child(3) > div.pane-header > h3').click()
        
        const fileName='burhan photo.png'
        cy.fixture('burhan photo.png')
        .then(Cypress.Blob.base64StringToBlob)//for converting
        .then((fileContent) => {
            cy.get('.logo-preview').attachFile(
                {fileContent, fileName, mimeType: 'image/**'}, {subjectType: 'drag-n-drop'}
            )
    })
});
});