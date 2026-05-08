import {test} from "@playwright/test"
test("browser_size",async({page})=>
{
   await page.setViewportSize({width:1800, height:500})
    await page.goto("https://www.flipkart.com")
})