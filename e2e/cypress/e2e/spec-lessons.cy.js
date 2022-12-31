const homePage = require("../pages/HomePage");
const lessonPage = require("../pages/LessonPage");

describe("Lessons page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login("react_test@test.com", "test1234");
    homePage.NavigationLessons().click();
  });

  it("The lesson page should display lessons", () => {
    cy.url().should("contain", "/Lessons");
    lessonPage.getLessonListTitle().should("have.text", "List Lessons");
    lessonPage.getLessonCard(1).click();
  });
});
