class UserPage {
  getUserListTitle = () => cy.xpath('//*[@data-cy = "listUsersTitle"]');
}

module.exports = new UserPage();
