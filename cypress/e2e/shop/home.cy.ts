describe('should render the home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should has a correct title', () => {
    cy.get('h1').contains('Home')
  })

  it('should has a correct subtitle', () => {
    cy.get('h2').contains('Todos los productos')
  })
})
