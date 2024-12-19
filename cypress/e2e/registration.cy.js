import UserInfo from "../fixtures/correct emai&password.json"
import UserincInfo from "../fixtures/inccorect email&password.json"
describe('Test1Test2Test3', () => {

  it('დარეგისტრირება', () => {
    cy.visit("")
    cy.registr()
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('contain', 'Logout').click()})

      it('დალოგინება სწორი მონაცემებით', () => {
       cy.visit("")
        cy.get('.active > :nth-child(1) > h2').should('contain','Full-Fledged practice website for Automation Engineers')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains('Login to your account').should('be.visible')
        cy.get('[data-qa="login-email"]').type(UserInfo.coemail)
        cy.get('[data-qa="login-password"]').type(UserInfo.coPassword)
        cy.get('[data-qa="login-button"]').should('contain','Login').click()
        cy.get(':nth-child(10) > a').should('contain','Logged in as Ana') })

        it('დალოგინება არასწორი მონაცემებით', () => {
          cy.visit("/login")
        cy.contains('Login to your account').should('be.visible')
          cy.get('[data-qa="login-email"]').type(UserincInfo.incemail)
         cy.get('[data-qa="login-password"]').type(UserincInfo.incPassword)
         cy.get('[data-qa="login-button"]').should('contain','Login').click()
         cy.get('.login-form > form > p').should('contain','Your email or password is incorrect!')

        })
      
    })