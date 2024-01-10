describe('Invalid URL Warning', () => {
    it('passes', () => {
      cy.visit('http://localhost:3000')
      cy.get("button").click()
      cy.contains('div', 'INVALID URL')
    })
  })