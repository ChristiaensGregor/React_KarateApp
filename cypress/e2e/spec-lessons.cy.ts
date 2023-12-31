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
    cy.wait(500);
  });

  it("As an authenticated user I can navigate to the lessons page", () => {
    cy.get(homePage.NavigationButton(Navigation.LESSONS))
      .should("exist")
      .should("be.visible")
      .should("have.text", "lessons")
      .click();
    cy.url().should("contain", "/lessons");
    cy.get(lessonPage.ListTitle).should("have.text", "List Lessons");
  });

  it("As an authenticated admin user I can add and delete lessons", () => {
    cy.get(homePage.NavigationButton(Navigation.LESSONS))
      .should("exist")
      .should("be.visible")
      .should("have.text", "lessons")
      .click();
    cy.get(lessonPage.AddLesson)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Add Lesson")
      .click();
    cy.get(lessonPage.AddLessonTitle)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Add a new Lesson");
    cy.get(lessonPage.AddLessonType).should("exist").click();
    cy.get(lessonPage.AddLessonTypeStandard).click();
    cy.get(lessonPage.AddLessonLocation).should("exist").click();
    cy.get(lessonPage.AddLessonLocationMariaAalter).click();
    const mockDate = "31129999";
    cy.get(lessonPage.AddLessonDate).find("input").clear().type(mockDate);
    cy.get(lessonPage.AddLessonButton)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Add")
      .click();
    cy.get(`[data-cy='lesson-card-KarateLessonStandard${mockDate}']`).should("exist");
    cy.get(`[data-cy='lesson-card-participate-KarateLessonStandard${mockDate}']`)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Participate")
      .click();
    cy.get(`[data-cy='lesson-card-participants-KarateLessonStandard${mockDate}']`)
      .should("exist")
      .should("be.visible")
      .should("have.text", " Participants: 1");
    cy.get(`[data-cy='lesson-card-delete-KarateLessonStandard${mockDate}']`)
      .should("exist")
      .should("be.visible")
      .should("have.text", "Delete")
      .click();
    cy.get(homePage.NavigationButton(Navigation.HOME)).first().click();
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click();
    cy.get(`[data-cy='lesson-card-KarateLessonStandard${mockDate}']`).should("not.exist");
  });
});
