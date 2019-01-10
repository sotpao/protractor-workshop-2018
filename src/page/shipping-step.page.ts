import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private acceptTermsAndConditionCheck: ElementFinder;
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.acceptTermsAndConditionCheck =  $('#cgv');
    this.proceedToCheckoutButton = $('#form > p > button > span');
  }

  public async acceptAndContinue(): Promise<void> {
    await this.acceptTermsAndConditionCheck.click();
    await this.proceedToCheckoutButton.click();
  }
}
