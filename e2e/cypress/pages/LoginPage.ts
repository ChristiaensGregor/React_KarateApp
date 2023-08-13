class LoginPage {
  // eslint-disable-next-line
  EmailField = '[data-cy="login-Email-field"]';

  // eslint-disable-next-line
  PasswordField = '[data-cy="login-Password-field"]';

  // eslint-disable-next-line
  LoginButton = '[data-cy="login-Login-button"]';
}

const loginPage = new LoginPage();
export default { loginPage };
