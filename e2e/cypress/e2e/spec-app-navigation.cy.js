describe("app navigation", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("As a user i should be able to click on the app logo to navigate home", function () {
    cy.xpath('//*[@data-cy="navigation-home-button"]').first().click();
    cy.url().should("equal", "http://localhost:3000/");
    cy.visit("login");
    cy.url().should("equal", "http://localhost:3000/login");
    cy.xpath('//*[@data-cy="navigation-home-button"]').first().click();
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("As a user i should be able to click on lessons in the navigation menu", function () {
    cy.xpath('//*[@data-cy="navigation-Lessons-button"]').should("be.visible");
    cy.xpath('//*[@data-cy="navigation-Lessons-button"]').should("have.text", "Lessons");
    cy.xpath('//*[@data-cy="navigation-Lessons-button"]').should("be.enabled");
    cy.xpath('//*[@data-cy="navigation-Lessons-button"]').click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("As a user i should be able to click on Users in the navigation menu", function () {
    cy.xpath('//*[@data-cy="navigation-Users-button"]').should("be.visible");
    cy.xpath('//*[@data-cy="navigation-Users-button"]').should("have.text", "Users");
    cy.xpath('//*[@data-cy="navigation-Users-button"]').should("be.enabled");
    cy.xpath('//*[@data-cy="navigation-Users-button"]').click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("As a user i should be able to click on Profile in the navigation menu", function () {
    cy.get(".MuiAvatar-root").should("be.visible");
    cy.get(".MuiAvatar-root").click();
    cy.get("#navigation_Setting_Theme > .MuiTypography-root").should("be.visible");
    cy.get("#navigation_Setting_Login > .MuiTypography-root").should("be.visible");
    cy.get("#navigation_Setting_Logout > .MuiTypography-root").should("be.visible");
    cy.get(".css-1t3k1b1-MuiModal-root-MuiPopover-root-MuiMenu-root > .MuiBackdrop-root").click();
    cy.get("#navigation_Setting_Theme > .MuiTypography-root").should("not.be.visible");
    cy.get("#navigation_Setting_Login > .MuiTypography-root").should("not.be.visible");
    cy.get("#navigation_Setting_Logout > .MuiTypography-root").should("not.be.visible");
  });
});
