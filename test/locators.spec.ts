import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service';
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
        profession: ['Manual Tester', 'Automation Tester'],
        path: './resources/image.jpg',
        downloadFile: true,
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
    it('Then file should be upload', async () => {
      await expect(personalInformationPage.getFilename()).toBe('image.jpg');
    });
    it('Then file should be download', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('test-document.xlsx');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
  });
});
