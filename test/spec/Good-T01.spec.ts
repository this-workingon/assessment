import { expect } from 'chai';

import { Session } from 'test/helper';

import MailboxPage from 'lib/page/mailbox.page';

describe('Good-T01', function() {

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

  it('should be able search mailbox', function() {
    s.in(MailboxPage).interact(MailboxPage.field, 'search').setValue('github');
    browser.keys('Enter');


    let messages = $$('//table/tbody/tr[@jsmodel="nXDxbd"]/td/following-sibling::td/div[@role="checkbox"]');
    if (messages.length != 0) {
      messages[0].waitForExist(10000);
      messages[0].waitForDisplayed(10000);
      messages[0].click();
    }
  });

});
