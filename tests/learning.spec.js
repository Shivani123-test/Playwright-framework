import { test, expect} from '@playwright/test';
test('Learning locators', async({page}) =>{

    await page.goto('');

    const headingLocator=await page.getByRole("heading", {name:'Playwright Locator'});
    console.log(await headingLocator.textContent())

    await page.getByPlaceholder('Enter username').fill('admin');
    await page.getByPlaceholder('Enter password').fill('admin123');

    await page.locator('#role').selectOption('admin');

    await page.getByRole('button', {name:'Login'}).click();
})