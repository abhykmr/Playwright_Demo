import {test, expect}  from  "@playwright/test";




test("Verify-Title", async ({page}) => {
    await page.goto("https://automationexercise.com/")
    let title:string = await page.title();
    console.log(title);
    await expect(page).toHaveTitle(/Automation Exercise/);
})