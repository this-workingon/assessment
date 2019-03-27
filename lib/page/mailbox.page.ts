import { Page, Interactable } from 'lib/common';

interface Message {
  to?: string;
  subject?: string;
  body?: string;
}

export default class MailboxPage extends Page {
  static button: Interactable = {
    compose: '//div[text()="Compose"]',
    delete: '//div[@title="Delete"]',
    send: '//div[text()="Send"]'
  }

  static field: Interactable = {
    search: '//input[@name="q"]'
  }

  static notification: Interactable = {
    deleted: '//span[text()="Conversation moved to Bin."]',
    sent: '//span[text()="Message sent."]'
  }

  static message: Interactable = {
    compose: '//div[text()="New Message"]',
    to: '//textarea[@aria-label="To"]',
    subject: '//input[@name="subjectbox"]',
    body: '//div[@aria-label="Message Body"]'
  }

  compose(message: Message): void {
    if (this.interact(MailboxPage.message, 'compose')) {
      this.interact(MailboxPage.message, 'to').setValue(message.to);
      this.interact(MailboxPage.message, 'subject').setValue(message.subject);
      this.interact(MailboxPage.message, 'body').setValue(message.body);
    }
  }
}
