import { Page } from '@playwright/test';

export class AdminPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateToUserManagement() {
    await this.page.waitForSelector('text="Admin"', { state: 'visible' });
    await this.page.click('text="Admin"');  }

  async addUser(username: string, password: string, employeeName: string) {
    await this.page.click('button:has-text("Add")');

    await this.page.click('//*[contains(text(), "User Role")]/../following-sibling::div');
    await this.page.click('//*[contains(text(),"Admin")]');

    await this.page.click('//*[contains(text(), "Status")]/../following-sibling::div');
    await this.page.click('//*[contains(text(),"Enabled")]');


    await this.page.waitForSelector('[placeholder="Type for hints..."]', { state: 'visible' });
    await this.page.fill('[placeholder="Type for hints..."]', employeeName);
    // await this.page.waitForTimeout(3000);
    await this.page.click('//*[contains(text(),"Orange  Test")]');
    await this.page.waitForSelector('//label[contains(text(), "Username")]/../following-sibling::div//input', { state: 'visible' });
    await this.page.fill('//label[contains(text(), "Username")]/../following-sibling::div//input', username);

    await this.page.waitForSelector('//label[contains(text(), "Password")]/../following-sibling::div[1]/input[1]', { state: 'visible' });
    await this.page.fill('//label[contains(text(), "Password")]/../following-sibling::div[1]/input[1]', password);

    await this.page.waitForSelector('//label[contains(text(), "Confirm Password")]/../following-sibling::div[1]/input[1]', { state: 'visible' });
    await this.page.fill('//label[contains(text(), "Confirm Password")]/../following-sibling::div[1]/input[1]', password);
    await this.page.click('button:has-text("Save")');
  }
}