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

  public async login(email: string, password: string): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
    await this.submitLogginButton.click();
  }
}
