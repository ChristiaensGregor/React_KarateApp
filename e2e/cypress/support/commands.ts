import {homePage,Settings} from '../pages/HomePage'
import { loginPage } from "../pages/LoginPage";
import "@cypress/xpath";

Cypress.Commands.add("login", (email:string, password:string) => {
  cy.get(homePage.Settings).click();
  cy.get(homePage.SettingsButton(Settings.LOGIN)).click();
  loginPage.EmailField().click();
  loginPage.EmailField().type(email);
  loginPage.PasswordField().click();
  loginPage.PasswordField().type(password);
  loginPage.LoginButton().click();
});
