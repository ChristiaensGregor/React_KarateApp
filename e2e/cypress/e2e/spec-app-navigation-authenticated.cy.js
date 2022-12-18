const homePage = require("../pages/HomePage");

describe("app navigation new user", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i can log in and access the otherwise protected components", () => {
    cy.login("react_test@test.com", "test1234");

    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/Lessons");
    cy.get("#listLessonsTitle").should("have.text", "List Lessons");

    homePage.NavigationUsers().click();
    cy.url().should("equal", "http://localhost:3000/Users");
    cy.get("#listLessonsTitle").should("have.text", "List Users");

    homePage.NavigationSettings().click();
    homePage.NavigationSettingsLogout().click().debug();

    homePage.NavigationLessons().click();
    cy.url().should("equal", "http://localhost:3000/Login");
  });
});
