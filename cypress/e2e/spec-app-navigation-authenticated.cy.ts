import { homePage, Navigation, Settings } from "../pages/HomePage";
import lessonPage from "../pages/LessonPage";
import { loginPage } from "../pages/LoginPage";

describe("app navigation logged in user", () => {
  before(() => {
    cy.visit("");
    cy.login("react_test@test.com", "test1234");
    cy.visit("login");
    cy.get(loginPage.UserEmail).should("have.text", "react_test@test.com");
  });

  beforeEach(() => {
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
  });

  it("As a user i can log in and access the otherwise protected components", () => {
    cy.url().should("equal", "http://localhost:3000/");
    cy.get("#logo").should("be.visible");
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click();
    cy.url().should("equal", "http://localhost:3000/lessons");
    cy.get(lessonPage.ListTitle).should("have.text", "List Lessons");
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).should("be.visible").click();
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });
});
