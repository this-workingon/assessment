import SigninPage from 'lib/page/identifier.page';
import PasswordPage from 'lib/page/pwd.page';

export class Session {
  constructor(path: string = '') {
    browser.url(path);
  }

  in<T>(page: { new(): T; }): T {
    return new page();
  }

  signin(username: string, password: string): void {
    this.in(SigninPage).interact(SigninPage.field, 'username').setValue(username);
    this.in(SigninPage).interact(SigninPage.button, 'next').click();
    this.in(PasswordPage).interact(PasswordPage.field, 'password').setValue(password);
    this.in(PasswordPage).interact(PasswordPage.button, 'next').click();
  }
}
