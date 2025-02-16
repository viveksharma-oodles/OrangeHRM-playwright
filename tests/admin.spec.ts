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
    await adminPage.addUser('testuser1', 'Test@123', 'John Doe');
    
    // Verify user addition (Example check)
    await expect(page.locator('text="testuser1"')).toBeVisible();
  });
});