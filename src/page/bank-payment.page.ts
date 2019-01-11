import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.confirmOrderButton = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
