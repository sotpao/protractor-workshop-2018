import { ElementFinder, element, browser, promise, by } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;
  private pageTitle: ElementFinder;

  constructor() {
    this.frame = element(by.id('IF1'));
    this.pageTitle = element(by.id('content')).element(by.tagName('h1'));
  }
  public async getTitle(): Promise<string> {
    return await this.pageTitle.getText();
  }
  public setFormFrameHeight(height: number): promise.Promise < void > {
    return browser.executeScript(`arguments[0].height = ${height};`, this.frame);
  }
  public async getHeight(): Promise<number> {
    const height = await this.frame.getAttribute('height');
    return Number(height);
  }
  public async switchToFrame(): Promise<void> {
    await browser.switchTo().frame(this.frame.getWebElement());
  }
  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
