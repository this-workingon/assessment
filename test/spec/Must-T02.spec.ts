import { expect } from 'chai';

import { Session } from 'test/helper';

import MailboxPage from 'lib/page/mailbox.page';

describe('Must-T02', function() {

  let s: Session;
  let username: string = process.env.GMAIL_USERNAME || '';
  let password: string = process.env.GMAIL_PASSWORD || '';

  before(function() {
    s = new Session();
    s.signin(username, password);
    // remove overlay
    try {
      $('//div[@class="buX-Jh"]').waitForExist(30000);
      $('//div[@class="buX-Jh"]').waitForDisplayed(30000);
      browser.execute(() => {
        let unwanted = document.querySelector('div.buX-Jh');
        if (unwanted) {
          unwanted.remove();
        }
      });
    } catch { ; }
  });

  it('should be able to compose mail message', function() {
    s.in(MailboxPage).interact(MailboxPage.button, 'compose').click();
    s.in(MailboxPage).compose({
      to: username + '@gmail.com',
      subject: 'Hello world!',
      body: 'This is an automated message.'
    });
    expect(s.in(MailboxPage).interact(MailboxPage.message, 'subject').getValue()).to.equal('Hello world!');
  });

  it('should be able to send mail message', function() {
    s.in(MailboxPage).interact(MailboxPage.button, 'send').click();
    expect(s.in(MailboxPage).interact(MailboxPage.notification, 'sent')).to.exist;
  });

  it('should be able to receive mail message', function() {
    $('//div[@role="link"]/descendant::*[text()="Hello world!"]').waitForExist(30000);
    $('//div[@role="link"]/descendant::*[text()="Hello world!"]').waitForDisplayed(30000);
    expect($('//div[@role="link"]/descendant::*[text()="Hello world!"]')).to.exist;
  });

  it('should be able to delete mail message', function() {
    let messages = $$('//table/tbody/tr[@jsmodel="nXDxbd"]/td/following-sibling::td/div[@role="checkbox"]');
    if (messages.length != 0) {
      messages[0].waitForExist(10000);
      messages[0].waitForDisplayed(10000);
      messages[0].click();
    }

    s.in(MailboxPage).interact(MailboxPage.button, 'delete').click();
    expect(s.in(MailboxPage).interact(MailboxPage.notification, 'deleted')).to.exist;

    browser.waitUntil(function() {
      return !$('//span[text()="Conversation moved to Bin."]').isDisplayed();
    }, 30000);
  });

});
