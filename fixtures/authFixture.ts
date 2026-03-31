import { test as base } from '@playwright/test';

export const test = base.extend({

  loggedInPage: async ({ page }, use) => {

    await page.goto('https://example.com/login');

    await page.getByLabel('Email').fill('user@test.com');
    await page.getByLabel('Password').fill('password');

    await page.getByRole('button', { name: 'Login' }).click();

    await use(page);

  }

});