import { homePage, Navigation } from "../pages/HomePage";
import {lessonPage} from "../pages/LessonPage";

describe("Lessons page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login("react_test@test.com", "test1234");
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click();
  });

  it("The lesson page should display lessons", () => {
    cy.url().should("contain", "/lessons");
    cy.get(lessonPage.ListTitle).should("have.text", "List Lessons");
    cy.get(lessonPage.LessonCards).eq(0).click()
  });
});
