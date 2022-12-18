describe("app landing experience", () => {
  it("As a user I can acess the home page", function () {
    cy.visit("home");
    cy.url().should("equal", "http://localhost:3000/home");
  });
  it("As a user i should be redirected towards the home page when browing a nonexistent path", () => {
    cy.visit("/blablabla");
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user I can acess the login page", function () {
    cy.visit("Login");
    cy.url().should("equal", "http://localhost:3000/Login");
  });
  it("As a user I can acess the register page", function () {
    cy.visit("register");
    cy.url().should("equal", "http://localhost:3000/register");
  });

  it("As a user I am redirected to the login page when trying to acess features requireing authentication", function () {
    cy.visit("lessons");
    cy.url().should("equal", "http://localhost:3000/Login");
    cy.visit("users");
    cy.url().should("equal", "http://localhost:3000/Login");
  });
});
