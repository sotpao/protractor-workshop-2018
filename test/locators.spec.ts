import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
console.log('Mensaje');
describe('Given a form page', () => {
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/automation-practice-form/');
  });

  describe('when fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Paola',
        lastName: 'Sotelo',
        sex: 'Female',
        experience: 4,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });

    });
    it('the form should be filled', async () => {
      await expect(personalInformationPage.getFormLabel()).toBe('Practice Automation Form');
    });
  });
});
