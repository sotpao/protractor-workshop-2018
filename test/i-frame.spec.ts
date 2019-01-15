import { browser } from 'protractor';
import { IFramePage, PersonalInformationPage } from '../src/page';

describe('Given a iframes page', () => {
  const iframe = new IFramePage();
  beforeAll(async () => {
    await browser.get('https://www.toolsqa.com/iframe-practice-page/');
  });
  it('then the title of the page should be Sample Iframe page', async() => {
    await expect(iframe.getTitle()).toBe('Sample Iframe page');
  });

  describe('When changes iframe height', () => {
    beforeAll(async () => {
      await iframe.setFormFrameHeight(600);
    });
    it('then frame should be changed', async() => {
      expect(await iframe.getHeight()).toBe(600);
    });
    describe('And switch to Frame 1', () => {
      const personalInformationPage = new PersonalInformationPage();
      beforeAll(async () => {
        await iframe.switchToFrame();
      });
      it('then the title of the frame should be Practice Automation Form', async() => {
        await expect(personalInformationPage.getFormLabel()).toBe('Practice Automation Form');
      });
      describe('And return to the main context', () => {
        beforeAll(async () => {
          await iframe.switchToMainPage();
        });
        it('then page should other title', async() => {
          await expect(iframe.getTitle()).toBe('Sample Iframe page');
        });
      });
    });
  });
});
