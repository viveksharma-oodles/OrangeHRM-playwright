import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests/pages/loginPage';
import { AdminPage } from '../tests/pages/adminPage';

test.describe('Admin Module - User Management', () => {
  test('Add a new user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const adminPage = new AdminPage(page);
    
    await loginPage.navigate();
    await loginPage.login('Admin', 'admin123');
    await adminPage.navigateToUserManagement();
    await adminPage.addUser('regieuser6', 'Test@123', 'test');
    
    // Verify user addition (Example check)
    await page.waitForTimeout(4000); 
    await expect(page.locator('//*[contains(text(),"testuser6")]')).toBeVisible();
  });
});