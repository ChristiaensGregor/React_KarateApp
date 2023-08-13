/* eslint-disable */
export enum Navigation {
  HOME = 'home',
  LESSONS = 'lessons',
}
export enum Settings {
  THEME = 'theme',
  LOGIN = 'login',
  LOGOUT = 'logout',
}
/* eslint-enable */

class HomePage {
  // eslint-disable-next-line class-methods-use-this
  NavigationButton = (button: string): string => `[data-cy="navigation-${button}-button"]`;

  Settings = "[data-cy=\"navigation-setting-button\"]";

  // eslint-disable-next-line class-methods-use-this
  SettingsButton = (setting: string) => `[data-cy="navigation-setting-${setting}-button"]`;
}

const homePage = new HomePage();
export { homePage };
