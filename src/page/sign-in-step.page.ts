import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private submitLogginButton: ElementFinder;

  constructor() {
    this.emailField = $('#email');
    this.passwordField =  $('#passwd');
    this.submitLogginButton = $('#SubmitLogin');
  }

  public async login(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.submitLogginButton.click();
  }
}
