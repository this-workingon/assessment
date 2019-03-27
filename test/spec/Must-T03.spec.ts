import { expect } from 'chai';

import { Session } from 'test/helper';

import CreateAccountPage from 'lib/page/webcreateaccount.page';

describe('Must-T03', function() {

  let s: Session;

  before(function() {
    s = new Session("https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp");
  });

  it('should be able to create account', function() {
    s.in(CreateAccountPage).interact(CreateAccountPage.field, 'firstname').setValue('This');
    s.in(CreateAccountPage).interact(CreateAccountPage.field, 'lastname').setValue('Is');
    s.in(CreateAccountPage).interact(CreateAccountPage.field, 'username').setValue('NotAnotherTest2019');
    s.in(CreateAccountPage).interact(CreateAccountPage.field, 'password').setValue('An0therTest');
    s.in(CreateAccountPage).interact(CreateAccountPage.field, 'confirm_password').setValue('An0therTest');
    s.in(CreateAccountPage).interact(CreateAccountPage.button, 'next').click();

    browser.waitUntil(function() {
      return !$('//input[@id="firstName"]').isDisplayed();
    }, 30000);
  });

});
