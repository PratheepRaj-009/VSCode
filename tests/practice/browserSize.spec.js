import{chromium, test} from"@playwright/test"
test("browsersize",async()=>
{
   let browser1=await chromium.launch({headless:false})
   let cont=await browser1.newContext({viewport:null})
   let page=await cont.newPage();
     await page.goto("https://www.flipkart.com")
   
})