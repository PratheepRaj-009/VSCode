import{test} from"../../customFixture/forLoginAndLogout.js"

test("login page @smoke ",async({loginpage,page})=>
{
    await page.getByRole("link",{name:'Dashboard'}).click()
    await page.pause()
})