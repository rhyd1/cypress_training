let filename
let data
before(function () {
    cy.fixture("selectors").then(
        sel => {
            data = sel
        }
    )
})

Cypress.Commands.add("SwitchFiles", (filename) => {
    switch (filename) {
        case 'cypress/fixtures/example.jpg':
          cy.get('input[type="file').should('be.visible').selectFile(filename)
          cy.contains('File Successfully Uploaded').should('be.visible')
            break
        case 'cypress/fixtures/example.csv':
          cy.get('input[type="file').should('be.visible').selectFile(filename)
          cy.contains('File type should be pdf, png, jpeg or jpg').should('be.visible')
          break
        case 'cypress/fixtures/example.json':
          cy.get('input[type="file').should('be.visible').selectFile(filename)
          cy.contains('File type should be pdf, png, jpeg or jpg').should('be.visible')
      }
})

Cypress.Commands.add("insertText", (string) => {
    //   cy.get('shadow-signup-form').should('be.visible')
    //   .shadow().find('[name="username"]').should('exist').type("rhydwharn")
    switch(string){
        case 'username':
            cy.typeAText(data.shadowDOMPage.usernameField, 'Rhydwharn')
            
    }
})

Cypress.Commands.add("typeAText", (field, text) => {
    cy.get('shadow-signup-form').should('be.visible')
      .shadow().find(field).should('exist').type(text)
      
})