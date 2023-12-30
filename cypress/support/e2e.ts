import "./commands.ts";
import { homePage, Navigation, Settings } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";

before(() => {
  cy.visit("");
  cy.login("react_test@test.com", "test1234");
  cy.get(homePage.Settings).click();
  cy.get(homePage.SettingsButton(Settings.LOGIN))
    .should("be.visible")
    .should("have.text", "login")
    .click();
  cy.get(loginPage.UserEmail).should("have.text", "react_test@test.com");
  cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
});
