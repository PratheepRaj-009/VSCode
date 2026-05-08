import{chromium, test, webkit} from"@playwright/test"
test("launchingChromium",async()=>
{
    let browser=await webkit.launch()
    let cont=await browser.newContext()
    let page=await cont.newPage()
    await page.goto("https://www.amazon.in")

})