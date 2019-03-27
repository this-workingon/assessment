import { expect } from 'chai';

import { Session } from 'test/helper';

import SigninPage from 'lib/page/identifier.page';

describe('GUI-T01', function() {

  let s: Session;

  before(function() {
    s = new Session();
  });

  it('should have an username field', function() {
    expect(s.in(SigninPage).interact(SigninPage.field, 'username')).to.exist;
  });

  it('and is interactable', function() {
    s.in(SigninPage).interact(SigninPage.field, 'username').setValue('Hello world!');
    expect(s.in(SigninPage).interact(SigninPage.field, 'username').getValue()).to.equal('Hello world!');
  });

  it('should have a next button', function() {
    expect(s.in(SigninPage).interact(SigninPage.button, 'next')).to.exist;
  });

});
