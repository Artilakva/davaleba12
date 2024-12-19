
describe('Test1Test2Test3', () => {

  it('დარეგისტრირება', () => {
    cy.visit("")
    cy.registr()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain', 'Logout').click()
  })
})