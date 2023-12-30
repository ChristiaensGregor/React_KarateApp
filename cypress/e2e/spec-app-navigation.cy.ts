import { homePage, Navigation, Settings } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";

describe("app navigation unauthenticated user", () => {
  before(() => {
    cy.visit("");
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).click();
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("As an unauthenticated user I can navigate to the login page and no user information is displayed", () => {
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.LOGIN))
      .should("be.visible")
      .should("have.text", "login")
      .click();
    cy.get(loginPage.UserEmail).should("not.have.text");
  });

  it("As an unauthenticated user I should be able to click on the app logo to navigate home", () => {
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.visit("Login");
    cy.url().should("equal", "http://localhost:3000/Login");
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As an unauthenticated user I should be redirected to the login page after attempting to navigate to the lessons page", () => {
    cy.get(homePage.NavigationButton(Navigation.LESSONS))
      .should("be.visible")
      .should("have.text", "lessons")
      .should("be.enabled")
      .click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });

  it("As an unauthenticated user i should be able to click on Profile in the navigation menu to display the profile navigation", () => {
    cy.get(".MuiAvatar-root").should("be.visible").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGIN)).should("be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).should("be.visible");
    cy.xpath("//body").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("not.be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGIN)).should("not.be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).should("not.be.visible");
  });

  it("As an unauthenticated user I should be able to switch from light to dark theme using the setting under the settings menu", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light").click();
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to dark").click();
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light");
  });
});
