export interface Interactable {
  readonly [index: string]: string;
}

export abstract class Page {

  private element(selector: string): WebdriverIO.Element {
    let e = $(selector);
    e.waitForExist();
    e.waitForDisplayed();
    return e;
  }

  interact(item: Interactable, label: string): WebdriverIO.Element {
    return this.element(item[label]);
  }

}
