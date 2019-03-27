import { Page, Interactable } from 'lib/common';

export default class PasswordPage extends Page {

  static button: Interactable = {
    next: '//div[@id="passwordNext"]',
  }

  static field: Interactable = {
    password: '//input[@name="password"]'
  }

}
