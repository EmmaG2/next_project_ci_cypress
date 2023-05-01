import {devUrl} from '../../constants'

describe('Tests for the home ref', () => {
  it('should has a correct title', () => {
    cy.visit(devUrl)

    cy.get('h1').contains('Home')
  })

  it('should has a correct subtitle', () => {
    cy.visit(devUrl)

    cy.get('h2').contains('Todos los productos')
  })
})
