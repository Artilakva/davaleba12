Cypress.Commands.add('registr', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    //4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should('have.text',"New User Signup!")
    //6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type("Ana")
    cy.get('[data-qa="signup-email"]').type("artilakva1121@gmail.com")
    //7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should('be.visible')
    //9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('.clearfix > :nth-child(1)').click()
    cy.get('[data-qa="name"]').should('have.value',"Ana")
    cy.get('[data-qa="email"]').should('have.value',"artilakva1121@gmail.com")
    cy.get('[data-qa="password"]').type('111111')
    cy.get('[data-qa="days"]').type('8')
    cy.get('[data-qa="months"]').type('11')
    cy.get('[data-qa="years"]').type('1995')
    //10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').click()
    //11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').click()
    //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type("Ana")
    cy.get('[data-qa="last_name"]').type('Artilakva')
    cy.get('[data-qa="company"]').type('Meta')
    cy.get('[data-qa="address"]').type('LA')
    cy.get('[data-qa="address2"]').type('NY')
    cy.get('[data-qa="country"]').type("USA")
    cy.get('[data-qa="state"]').type('NY')
    cy.get('[data-qa="city"]').type('NY')
    cy.get('[data-qa="zipcode"]').type('0180')
    cy.get('[data-qa="mobile_number"]').type('112233')
    //13. Click 'Create Account button
    cy.get('[data-qa="create-account"]').click()
    //4. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('b').should('be.visible')
    //15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    //16. Verify that 'Logged in as username' is visible
    cy.get(':nth-child(10) > a').should('be.visible')
    
    
})
    
    






