class LoginPage {
  EmailField = () => cy.xpath('//*[@data-cy="login-Email-field"]');
  PasswordField = () => cy.xpath('//*[@data-cy="login-Password-field"]');
  LoginButton = () => cy.xpath('//*[@data-cy="login-Login-button"]');
}

module.exports = new LoginPage();
