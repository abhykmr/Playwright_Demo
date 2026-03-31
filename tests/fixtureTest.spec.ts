import { test } from '../fixtures/authFixture';


test('dashboard visible', async ({ loggedInPage }) => {

  await loggedInPage.goto('https://example.com/dashboard');

});