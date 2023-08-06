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
