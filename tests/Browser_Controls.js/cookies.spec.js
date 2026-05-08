import{test} from "@playwright/test"
test("gettingCookies",async({browser})=>
{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://flipkart.com")
    console.log(await context.cookies())
})