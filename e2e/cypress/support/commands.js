const homePage = require("../pages/HomePage");
const loginPage = require("../pages/LoginPage");

require("@cypress/xpath");
Cypress.Commands.add("login", (email, password) => {
  homePage.NavigationSettings().click();
  homePage.NavigationSettingsLogin().click();
  loginPage.EmailField().click();
  loginPage.EmailField().type(email);
  loginPage.PasswordField().click();
  loginPage.PasswordField().type(password);
  loginPage.LoginButton().click();
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
