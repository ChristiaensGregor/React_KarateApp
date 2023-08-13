import { homePage, Settings } from "../pages/HomePage.ts";
import loginPage from "../pages/LoginPage.ts";
import "@cypress/xpath";

declare global {
  interface Chainable {
    // eslint-disable-next-line
    login(email: string, password: string): void;
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get(homePage.Settings).click();
  cy.get(homePage.SettingsButton(Settings.LOGIN)).click();
  cy.get(loginPage.loginPage.EmailField).click();
  cy.get(loginPage.loginPage.EmailField).type(email);
  cy.get(loginPage.loginPage.PasswordField).click();
  cy.get(loginPage.loginPage.PasswordField).type(password);
  cy.get(loginPage.loginPage.LoginButton).click();
});
