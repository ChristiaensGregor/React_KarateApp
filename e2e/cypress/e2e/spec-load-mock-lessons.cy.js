const homePage = require("../pages/HomePage");

describe("mock lesson request", () => {
  beforeEach(() => {
    cy.visit("");
    cy.login("react_test@test.com", "test1234");
    //URL: wss://karate-lessons-8c130-default-rtdb.europe-west1.firebasedatabase.app/.ws?v=5&p=1:122597012075:web:ac3ee409cf535ec5b7b72e&ns=karate-lessons-8c130-default-rtdb

    cy.intercept("GET", "(//karate-lessons).*", {
      statusCode: 101,
      body: {},
    });
  });
  it("passes", () => {
    homePage.NavigationLessons().click();
  });
});
