import{test} from"@playwright/test"
test("storing the session",async({page})=>
{
        await page.goto("http://localhost:8888/")
        await page.locator("//input[@name='user_name']").fill("admin")
        await page.locator("//input[@name='user_password']").fill("admin")
        await page.getByRole("button",{name:"Login"}).click()
        await page.context().storageState({path:"auth.json"})
})