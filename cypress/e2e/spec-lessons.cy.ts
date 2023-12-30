import { homePage, Navigation, Settings } from "../pages/HomePage";
import lessonPage from "../pages/LessonPage";
import { loginPage } from "../pages/LoginPage";

describe("Lessons page", () => {
  before(() => {
    cy.visit("");
    cy.get(homePage.Settings).click();
    cy.get(homePage.SettingsButton(Settings.LOGIN))
      .should("be.visible")
      .should("have.text", "login")
      .click();
    cy.get(loginPage.UserEmail).should("have.text", "react_test@test.com");
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("The lesson page should display lessons", () => {
    cy.wait(500);
    cy.get(homePage.NavigationButton(Navigation.LESSONS))
      .should("exist")
      .should("be.visible")
      .should("have.text", "lessons")
      .click();
    cy.url().should("contain", "/lessons");
    cy.get(lessonPage.ListTitle).should("have.text", "List Lessons");
    cy.get(lessonPage.LessonCards).eq(0).click();
  });
});
