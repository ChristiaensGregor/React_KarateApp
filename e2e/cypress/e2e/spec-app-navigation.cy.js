const homePage = require("../pages/HomePage");

describe("app navigation", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i should be able to click on the app logo to navigate home", function () {
    homePage.NavigationHome().first().click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.visit("login");
    cy.url().should("equal", "http://localhost:3000/login");
    homePage.NavigationHome().first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user i should be able to click on lessons in the navigation menu", function () {
    homePage.NavigationLessons().should("be.visible");
    homePage.NavigationLessons().should("have.text", "Lessons");
    homePage.NavigationLessons().should("be.enabled");
    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("As a user i should be able to click on Users in the navigation menu", function () {
    homePage.NavigationUsers().should("be.visible");
    homePage.NavigationUsers().should("have.text", "Users");
    homePage.NavigationUsers().should("be.enabled");
    homePage.NavigationUsers().click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("As a user i should be able to click on Profile in the navigation menu", function () {
    cy.get(".MuiAvatar-root").should("be.visible");
    cy.get(".MuiAvatar-root").click();
    homePage.NavigationSettingsTheme().should("be.visible");
    homePage.NavigationSettingsLogin().should("be.visible");
    homePage.NavigationSettingsLogout().should("be.visible");
    cy.get(".css-1t3k1b1-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiBackdrop-root").click();
    homePage.NavigationSettingsTheme().should("not.be.visible");
    homePage.NavigationSettingsLogin().should("not.be.visible");
    homePage.NavigationSettingsLogout().should("not.be.visible");
  });

  it("As a user i should be able to switch from light to dark theme using the setting under the settings menu", function () {
    cy.visit("http://localhost:3000/");
    cy.get(".MuiAvatar-root").click();
    homePage.NavigationSettingsTheme().should("have.text", "Switch to light");
    homePage.NavigationSettingsTheme().click();
    cy.get(".MuiAvatar-root").click();
    homePage.NavigationSettingsTheme().should("have.text", "Switch to dark");
    homePage.NavigationSettingsTheme().click();
    cy.get(".MuiAvatar-root").click();
    homePage.NavigationSettingsTheme().should("have.text", "Switch to light");
  });
});
