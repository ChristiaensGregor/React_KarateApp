const homePage = require("../pages/HomePage");
const lessonPage = require("../pages/LessonPage");

describe("app navigation new user", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i can log in and access the otherwise protected components", () => {
    cy.login("react_test@test.com", "test1234");
    cy.url().should("equal", "http://localhost:3000/");

    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/Lessons");
    lessonPage.getLessonListTitle().should("have.text", "List Lessons");

    homePage.NavigationSettings().click();
    cy.wait(1000);
    homePage.NavigationSettingsLogout().click();

    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });
});
