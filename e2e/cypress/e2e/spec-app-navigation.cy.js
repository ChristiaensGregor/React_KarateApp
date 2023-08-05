const homePage = require("../pages/HomePage");

describe("app navigation new user", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i should be able to click on the app logo to navigate home", function () {
    homePage.NavigationHome().first().click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.visit("Login");
    cy.url().should("equal", "http://localhost:3000/Login");
    homePage.NavigationHome().first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user i should be able to click on lessons in the navigation menu", function () {
    homePage.NavigationLessons().should("be.visible");
    homePage.NavigationLessons().should("have.text", "Lessons");
    homePage.NavigationLessons().should("be.enabled");
    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });

  it("As a user i should be able to click on Profile in the navigation menu", function () {
    cy.get(".MuiAvatar-root").should("be.visible");
    cy.get(".MuiAvatar-root").click();
    homePage.NavigationSettingsTheme().should("be.visible");
    homePage.NavigationSettingsLogin().should("be.visible");
    homePage.NavigationSettingsLogout().should("be.visible");
    cy.xpath("//body").click();
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
