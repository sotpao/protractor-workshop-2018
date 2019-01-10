import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;

  constructor() {
    this.payByBankWireOption = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async payByBankWire(): Promise<void> {
    await this.payByBankWireOption.click();
  }
}
