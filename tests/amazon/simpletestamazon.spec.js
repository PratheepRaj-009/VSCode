import {test} from"@playwright/test"

test("helloGithub",async({page})=>
{
    await page.goto("https://www.amazon.in/")
    console.log("direct changes from GitHub globa;l repository")
    
})
