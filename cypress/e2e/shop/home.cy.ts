describe('Tests for the home ref', () => {
  it('should has a correct title', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Home')
  })

  it('should has a correct subtitle', () => {
    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('Todos los productos')
  })
})
