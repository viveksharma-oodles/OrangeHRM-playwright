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
    await this.page.waitForSelector('[placeholder="Type for hints..."]', { state: 'visible' });
    await this.page.fill('[placeholder="Type for hints..."]', employeeName);
    await this.page.waitForSelector('//label[contains(text(), "Username")]/following-sibling::input', { state: 'visible' });
    await this.page.fill('//label[contains(text(), "Username")]/following-sibling::input', username);

    await this.page.waitForSelector('//label[contains(text(), "password")]/following-sibling::input', { state: 'visible' });
await this.page.fill('//label[contains(text(), "password")]/following-sibling::input', password);

await this.page.waitForSelector('//label[contains(text(), "confirmPassword")]/following-sibling::input', { state: 'visible' });
await this.page.fill('//label[contains(text(), "confirmPassword")]/following-sibling::input', password);

    // await this.page.fill('input[name="password"]', password);
    // await this.page.fill('input[name="confirmPassword"]', password);
    await this.page.click('button:has-text("Save")');
  }
}