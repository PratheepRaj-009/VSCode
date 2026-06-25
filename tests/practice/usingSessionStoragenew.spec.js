import{test} from"@playwright/test"
test.use({storageState:"auth.json"})

test("using session storage", async({browser})=>
{
   let context=await browser.newContext()
   let page=await context.newPage()
    await page.goto("http://localhost:8888/index.php?action=index&module=Home")
    await page.getByRole('link',{name:"Calendar"}).click()

    await page.pause()
})