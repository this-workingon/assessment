import { expect } from 'chai';

import { Session } from 'test/helper';

import SigninPage from 'lib/page/identifier.page';
import PasswordPage from 'lib/page/pwd.page';

describe('Must-T01', function() {

  let s: Session;
  let username: string = process.env.GMAIL_USERNAME || '';
  let password: string = process.env.GMAIL_PASSWORD || '';

  before(function() {
    s = new Session();
  });

  it('should be able to sign in with valid username', function() {
    s.in(SigninPage).interact(SigninPage.field, 'username').setValue(username);
    s.in(SigninPage).interact(SigninPage.button, 'next').click();

    browser.waitUntil(() => {
      return browser.getUrl().includes('pwd');
    }, 10000, 'password page is not shown');
  });

  it('should be able to sign in with valid password', function() {
    s.in(PasswordPage).interact(PasswordPage.field, 'password').setValue(password);
    s.in(PasswordPage).interact(PasswordPage.button, 'next').click();

    browser.waitUntil(() => {
      return browser.getTitle().includes('Inbox');
    }, 20000, 'mailbox page is not shown');
  });

});
