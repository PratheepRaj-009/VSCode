import {test} from"@playwright/test"
test("browsername",async({browserName,browser})=>
{
    console.log(browserName);
    let con=await browser.newContext()
    let page=await con.newPage()
    await page.goto("https://www.flipkart.com")
})