cypress/e2e/example.cy.js
describe('Sample Test', () => {
  it('Visits the app', () => {
    cy.visit('/')
    cy.contains('Welcome') 
  })
})
