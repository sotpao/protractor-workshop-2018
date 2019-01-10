import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentStepPage: BankPaymentPage = new BankPaymentPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    // await $('#block_top_menu > ul > li:nth-child(3) > a').click();
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    // await $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click();
    await productListPage.selectProduct();
    await(browser.sleep(3000));
    // await $('[style*="display: block;"] .button-container > a').click();
    await productAddedModalPage.proceedToCheckout();
    await(browser.sleep(3000));
    // await $('.cart_navigation span').click();
    await summaryStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    // await $('#email').sendKeys('aperdomobo@gmail.com');
    // await $('#passwd').sendKeys('WorkshopProtractor');
    // await $('#SubmitLogin > span').click();
    await signInStepPage.login();
    await(browser.sleep(3000));

    // await $('#center_column > form > p > button > span').click();
    await addressStepPage.proceedToCheckout();
    await(browser.sleep(3000));

    // await $('#cgv').click();
    // await(browser.sleep(3000));

    // await $('#form > p > button > span').click();
    await shippingStepPage.acceptAndContinue();
    await(browser.sleep(3000));
    // await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await paymentStepPage.payByBankWire();
    await(browser.sleep(3000));
    // await $('#cart_navigation > button > span').click();
    await bankPaymentStepPage.confirmOrder();
    await(browser.sleep(3000));

    /* await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.'); */
    await expect(orderResumePage.getOrderTitle()).toBe('Your order on My Store is complete.');

  });
});
