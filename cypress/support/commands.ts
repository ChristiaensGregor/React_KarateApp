import { homePage, Settings } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";
import "@cypress/xpath";

declare global {
  interface Chainable {
    login(email: string, password: string): void;
  }
}

Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get(homePage.Settings).click();
  cy.get(homePage.SettingsButton(Settings.LOGIN)).click();
  cy.get(loginPage.EmailField).click();
  cy.get(loginPage.EmailField).type(email);
  cy.get(loginPage.PasswordField).click();
  cy.get(loginPage.PasswordField).type(password);
  cy.get(loginPage.LoginButton).click();
});
