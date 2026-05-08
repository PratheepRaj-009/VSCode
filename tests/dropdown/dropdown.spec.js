import{test} from"@playwright/test"

test("single select",async({browser})=>
{
    let context= await browser.newContext()
   let page= await context.newPage()
   await page.goto("https://www.amazon.in/")
   await page.getByTitle("Search in").selectOption({index:2})
   
   await page.waitForTimeout(3000)
})

test.only("multiple select",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let dd=page.locator("#colors")
    await dd.scrollIntoViewIfNeeded()
    await dd.selectOption([{index:1},{index:2}])
   await page.pause()
})

test("custom DD", async()=>
{
    
})