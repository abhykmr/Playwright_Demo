import { test } from '../fixtures/authFixture';
import {expect}  from "@playwright/test";


test('Product Page', async ({ loggedInPage }) => {

  await loggedInPage.goto('https://www.saucedemo.com/inventory.html');

  await expect(loggedInPage).toHaveTitle("Swag Labs");
});