export {}

describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('/')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})