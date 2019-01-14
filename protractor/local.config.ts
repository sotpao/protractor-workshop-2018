import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  // specs: ['../test/**/*.spec.js'],
  specs: ['../test/i-frame.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
    // browser.manage().timeouts().implicitlyWait(3000);
    browser.manage().timeouts().implicitlyWait(0);
  }
};
