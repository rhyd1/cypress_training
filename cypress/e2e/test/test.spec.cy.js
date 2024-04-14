import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


  beforeEach(() => {
    cy.visit('/', {failOnStatusCode: false})
  })

  
Given(/^that I am a able to access the file upload URL$/, () => {
	cy.contains('Upload File Demo').should('be.visible').click()
});


When(/^I click on the "([^"]*)"$/, (args1) => {
  cy.contains('Upload File Demo').should('be.visible').click()
	console.log(args1);
	return true;
});


// Then(/^I upload the JPG$/, () => {
// 	Cypress.Commands.add('getfilename', () => {
//     cy.get('input[type="file').should('be.visible').selectFile('cypress/fixtures/example.jpg')
//   })
// });


Then(/^I upload the "([^"]*)"$/, (filename) => {
	// cy.get('input[type="file').should('be.visible').selectFile(filename)
  //     cy.contains('File Successfully Uploaded').should('be.visible')
  
  cy.SwitchFiles(filename);
});


Given(/^that I am able to access the shadowDOM URL$/, () => {
	cy.contains('Shadow DOM').should('be.visible').click()
});

Then(/^I insert username$/, (args1,args2) => {
  cy.log(cy.typeAText(args1,args2))
	
});



  // it('passes', () => {
  //   cy.contains('Shadow DOM').should('be.visible').click()
  //   cy.get('shadow-signup-form').should('be.visible')
  //   .shadow().find('[name="username"]').should('exist').type("rhydwharn")
  //   cy.get('shadow-signup-form').should('be.visible')
  //   .shadow().find('[name="email"]').should('exist').type('test@yopmail.com')
  //   cy.get('shadow-signup-form').should('be.visible')
  //   .shadow().find('[name="password"]').should('exist').type('Testar1234')
  //   cy.get('shadow-signup-form').should('be.visible')
  //   .shadow().find('[name="confirm_password"]').should('exist').type('Testar1234')
  //   cy.get('shadow-signup-form').should('be.visible')
  //   .shadow().find('button').should('exist').click()
  // })

  // it('File Upload test', () => {
  //   cy.contains('Upload File Demo').should('be.visible').click()
  //   cy.get('input[type="file').should('be.visible').selectFile('cypress/fixtures/example.jpg')
  //   cy.contains('File Successfully Uploaded').should('be.visible')
  // }) 
