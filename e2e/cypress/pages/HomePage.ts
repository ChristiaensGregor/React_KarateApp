export enum Navigation {
  HOME="home",
  LESSONS="lessons"
}
export enum  Settings {
  THEME= "theme",
  LOGIN= "login",
  LOGOUT= "logout"
}

class HomePage {
  NavigationButton = (button: Navigation) : string => `[data-cy="navigation-${button}-button"]`
  Settings = '[data-cy="navigation-setting-button"]';
  SettingsButton = (setting: Settings) => `[data-cy="navigation-setting-${setting}-button"]`
}

const homePage = new HomePage()
export {homePage}