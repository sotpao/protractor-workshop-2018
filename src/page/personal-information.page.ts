import { ElementFinder, element, by } from 'protractor';
interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];

}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private submitLogginButton: ElementFinder;
  private formTitleLabel: ElementFinder;

  constructor () {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.submitLogginButton = element(by.name('submit'));
    this.formTitleLabel = element(by.id('content')).element(by.tagName('h1'));
  }
  private sexOption(name: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${name}"]`));
  }
  private experienceOption(years: number):ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }
  private professionOption(name: string):ElementFinder {
    return element(by.css(`[name="profession"][value="${name}"]`));
  }
  private toolsOption(name: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${name}"]`));
  }
  private continentOption(name: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', name));
  }
  private commandsOptions(name: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', name));
  }
  public async getFormLabel(): Promise<string> {
    return await this.formTitleLabel.getText();
  }
  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.experienceOption(form.experience).click();
    for (const name of form.profession) {
      await this.professionOption(name).click();
    }
    for (const name of form.tools) {
      await this.toolsOption(name).click();
    }
    await this.continentOption(form.continent).click();
    for (const name of form.commands) {
      await this.commandsOptions(name).click();
    }
    await this.submitLogginButton.click();
  }

}
