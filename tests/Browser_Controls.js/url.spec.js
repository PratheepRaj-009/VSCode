import{test} from "@playwright/test"
test("gettingUrl",async({browser})=>
{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://flipkart.com")
    console.log(await page.url())
    console.log(await context.cookies())
})