import{test} from "@playwright/test"
test("fixturs",async({page})=>
    {
       await page.goto("https://v1.demo.horilla.com/recruitment/application-form?recruitmentId=12")
    
      await page.locator("//select[@name='gender']").selectOption({label:'Male'})
      await page.waitForTimeout(5000)
    
      })

    test("fixtur",async({browser})=>{

      let context=await browser.newContext()
      let page=await context.newPage()
     await page.goto("https://www.flipkart.com")

    })