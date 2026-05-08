import{test} from"@playwright/test"
test("browsersize",async({page})=>
    {
        await page.goto("https://www.flipkart.com")
        let size =page.viewportSize()
        console.log(size)
    })