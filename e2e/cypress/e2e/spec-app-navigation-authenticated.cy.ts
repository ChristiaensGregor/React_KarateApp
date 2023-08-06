import {lessonPage} from '../pages/LessonPage'
import { homePage, Navigation, Settings } from "../pages/HomePage";

describe("app navigation logged in user", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i can log in and access the otherwise protected components", () => {
    cy.login("react_test@test.com", "test1234");
    cy.url().should("equal", "http://localhost:3000/");
    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click()
    cy.url().should("equal", "http://localhost:3000/lessons");
    cy.get(lessonPage.ListTitle).should("have.text", "List Lessons");

    cy.get(homePage.Settings).click()
    cy.wait(1000);
    cy.get(homePage.SettingsButton(Settings.LOGOUT)).click();

    cy.get(homePage.NavigationButton(Navigation.LESSONS)).click()
    cy.url().should("equal", "http://localhost:3000/Login");
  });
});
