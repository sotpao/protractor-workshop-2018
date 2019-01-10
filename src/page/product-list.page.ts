import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private product: ElementFinder;

  constructor () {
    this.product = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async selectProduct(): Promise<void> {
    await this.product.click();
  }
}
