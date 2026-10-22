// import {test} from"@playwright/test"

// test("helloGithub @regression @smoke",async({page})=>
// {
//     await page.goto("https://www.amazon.in/")
//     console.log("direct changes from GitHub globa;l repository")
    
// })

import{test}from"@playwright/test"

test('sample test',async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("titan watch for men");
    await page.keyboard.press("Enter")
})
