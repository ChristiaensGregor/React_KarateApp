class HomePage {
  NavigationHome = () => cy.xpath('//*[@data-cy="navigation-home-button"]');
  NavigationLessons = () => cy.xpath('//*[@data-cy="navigation-Lessons-button"]');
  NavigationUsers = () => cy.xpath('//*[@data-cy="navigation-Users-button"]');
  NavigationSettings = () => cy.xpath('//*[@data-cy="navigation-setting-button"]');
  NavigationSettingsTheme = () => cy.get('[data-cy="navigation-setting-Theme-button"]');
  NavigationSettingsLogin = () => cy.get('[data-cy="navigation-setting-Login-button"]');
  NavigationSettingsLogout = () => cy.get('[data-cy="navigation-setting-Logout-button"]');
}

module.exports = new HomePage(); //TODO Adjust this, currently it recreates the pageObject every time?
