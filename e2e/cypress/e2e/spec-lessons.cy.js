const homePage = require("../pages/HomePage");

describe("Lessons page", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login("react_test@test.com", "test1234");
    homePage.NavigationLessons().click();
  });

  it("passes", () => {
    cy.url().should("contain", "/Lessons");
  });
});
