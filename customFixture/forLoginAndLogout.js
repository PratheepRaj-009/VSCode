import {test as base} from"@playwright/test"

export const test=base.extend({
    loginpage: async({page},use)=>
    {
        await page.goto("http://localhost:8888/")
        await page.locator("//input[@name='user_name']").fill("admin")
        await page.locator("//input[@name='user_password']").fill("admin")
        await page.getByRole("button",{name:"Login"}).click()

        await use()
        
        
    }
})