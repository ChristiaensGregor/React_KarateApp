import { homePage, Navigation, Settings } from "../pages/HomePage";

describe("app navigation new user", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i should be able to click on the app logo to navigate home", function () {
    cy.log(homePage.NavigationButton(Navigation.HOME));
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.visit("Login");
    cy.url().should("equal", "http://localhost:3000/Login");
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user i should be able to click on lessons in the navigation menu", function () {
    cy.get(homePage.NavigationButton(Navigation.LESSONS))
      .should("be.visible")
      .should("have.text", "lessons")
      .should("be.enabled");
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });

  it("As a user i should be able to click on Profile in the navigation menu", function () {
    cy.get(".MuiAvatar-root").should("be.visible");
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGIN)).should("be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).should("be.visible");
    cy.xpath("//body").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("not.be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGIN)).should("not.be.visible");
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).should("not.be.visible");
  });

  it("As a user i should be able to switch from light to dark theme using the setting under the settings menu", function () {
    cy.visit("http://localhost:3000/");
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light").click();
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to dark").click();
    cy.get(".MuiAvatar-root").click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light");
  });
});