import { Page, Interactable } from 'lib/common';

export default class SigninPage extends Page {

  static button: Interactable = {
    next: '//div[@id="identifierNext"]',
    forgot_email: '//button[text()="Forget email?"]',
    create_account: '//span[text()="Create account"]'
  }

  static field: Interactable = {
    username: '//input[@id="identifierId"]'
  }

  static link: Interactable = {
    learn_more: '//a[text()="Learn more"]'
  }

  static menu: Interactable = {
    for_myself: '//div[text()="For myself"]'
  }

}
