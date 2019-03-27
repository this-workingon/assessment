import { Page, Interactable } from 'lib/common';

export default class CreateAccountPage extends Page {
  static button: Interactable = {
      next: '//div[@id="accountDetailsNext"]',
      show_password: '//div[@aria-label="Show password"]'
  }

  static field: Interactable = {
    firstname: '//input[@id="firstName"]',
    lastname: '//input[@id="lastName"]',
    username: '//input[@id="username"]',
    password: '//input[@name="Passwd"]',
    confirm_password: '//input[@name="ConfirmPasswd"]'
  }

  static link: Interactable = {
    signin: '//div[text()="Sign in instead"]'
  }
}
