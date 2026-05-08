import{test} from"@playwright/test"
test("title", async({browser})=>
{
    let cont=await browser.newContext()
  let page = await cont.newPage()
  await page.goto("https://flipkart.com")
  console.log(await page.title());
  
})