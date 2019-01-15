import { ElementFinder, element, by, browser } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';
import { DownloadService } from '../service';
interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  path: string;
  downloadFile: boolean;
  tools: string[];
  continent: string;
  commands: string[];

}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private submitLogginButton: ElementFinder;
  private formTitleLabel: ElementFinder;
  private uploadFileInput: ElementFinder;
  private testFileDownloadLink: ElementFinder;

  constructor () {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.submitLogginButton = element(by.name('submit'));
    this.formTitleLabel = element(by.id('content')).element(by.tagName('h1'));
    this.uploadFileInput = element(by.id('photo'));
    this.testFileDownloadLink = element(by.linkText('Test File to Download'));
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
  private async uploadFile(relativePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadFileInput.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
      // await(browser.sleep(10000));
    }
  }
  private async download() {
    const link = await this.testFileDownloadLink.getAttribute('href');

    const service = new DownloadService();
    await service.downloadFile(link, 'test-document.xlsx');
  }
  public async getFilename(): Promise<string> {
    const fullPath: string = await this.uploadFileInput.getAttribute('value');
    console.log('El value del fullPath', fullPath);
    return fullPath.split(/(\\|\/)/g).pop();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.experienceOption(form.experience).click();
    for (const name of form.profession) {
      await this.professionOption(name).click();
    }
    await this.uploadFile(form.path);
    if (form.downloadFile) {
      await this.download();
    }
    for (const name of form.tools) {
      await this.toolsOption(name).click();
    }
    await this.continentOption(form.continent).click();
    for (const name of form.commands) {
      await this.commandsOptions(name).click();
    }
  }
  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.submitLogginButton.click();
  }

}
