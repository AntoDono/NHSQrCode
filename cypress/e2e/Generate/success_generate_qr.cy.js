describe('Generate QR Code', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000')
      cy.get('input').type('https://youtube.com')
      cy.get('button').click()
      cy.contains('button', "Download")
    })
  })