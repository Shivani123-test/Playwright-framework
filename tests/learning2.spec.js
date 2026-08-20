import { test, expect} from '@playwright/test';
test('Learning locators', async({page}) =>{

    await page.goto('');

    //await page.getByRole('button', {name: 'Edit'}).click();
    await page.getByRole('button', {name: 'Edit'}).first().click();
    await page.locator('tr').filter({name: 'jatin'}).getByRole('button', {name:'Edit'}).click();
})