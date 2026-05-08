import{test} from"@playwright/test"

test("forct click",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox/disabled?sublist=2")
    await page.locator("#domain_a").click({force:true})
    await page.waitForTimeout(5555)
     await page.locator("#domain_a").dispatchEvent('click')
      await page.waitForTimeout(5555)
      await page.locator("#domain_a").screenshot({path:"screenshot/jhgjhg.png"})
})