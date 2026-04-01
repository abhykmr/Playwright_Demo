import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Dashboard } from '../pages/DashBoad';

test('login flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboad = new Dashboard(page);

  await loginPage.goto();

  await loginPage.login('standard_user', 'secret_sauce');

  await dashboad.verifyDashboard();

});