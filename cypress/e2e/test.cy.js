it("Google search",function(){

    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation{enter}')
})