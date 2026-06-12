import {test} from"@playwright/test"

test("helloGithub",async({page})=>
{
    await page.goto("https://www.amazon.in/")
    await page.pause()
})