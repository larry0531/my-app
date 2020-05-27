describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('/')

    cy.get('.add-to-do')
      .type('keep learning')
      .should('have.value', 'keep learning')

    cy.contains('Add Todo')
      .click()

    cy.get('ul').should('contain', 'keep learning')
  })
})