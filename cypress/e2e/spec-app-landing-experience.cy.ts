import { homePage, Navigation, Settings } from "../pages/HomePage";
import { loginPage } from "../pages/LoginPage";

describe("app landing experience", () => {
  before(() => {
    cy.visit("");
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).click();
  });

  after(() => {
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

  beforeEach(() => {
    cy.visit("");
  });

  it("As a user I can acess the home page", () => {
    cy.visit("home");
    cy.url().should("equal", "http://localhost:3000/home");
  });

  it("As a user i should be redirected towards the home page when browing a nonexistent path", () => {
    cy.visit("/blablabla");
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user I can acess the login page", () => {
    cy.visit("Login");
    cy.url().should("equal", "http://localhost:3000/Login");
  });
  it("As a user I can acess the register page", () => {
    cy.visit("register");
    cy.url().should("equal", "http://localhost:3000/register");
  });

  it("As a user I am redirected to the login page when trying to acess features requireing authentication", () => {
    cy.visit("lessons");
    cy.url().should("equal", "http://localhost:3000/Login");
  });

  it("As an unauthenticated user I can navigate to the login page and no user information is displayed", () => {
    cy.get(homePage.Settings).click();
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
    cy.get(homePage.Settings).should("be.visible").click();
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
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light").click();
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to dark").click();
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.THEME)).should("have.text", "Switch to light");
    cy.xpath("//body").click();
  });
});
