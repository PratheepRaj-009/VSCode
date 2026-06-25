import{test} from"@playwright/test"

test("iframes",async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
   // let frame1=await page.frame({url:'about:srcdoc'})
    //console.log(noOfPg.length);
    let frame2=await page.locator("iframe[class='w-full h-96']").contentFrame()
    let text=await frame2.locator("//p[@class='para']").first().textContent()
    console.log(text);

   let frame3=await frame2.frameLocator("//div[@class='form_container']/iframe").locator('.password')
    frame3.fill("hfdcnhmgjhk")
  // await frame3.locator('.password').fill("hfdcnhmgjhk")
})


test("Nested frame", async({page})=>
{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    let frame2=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    let innframe= await frame2.frameLocator("//iframe")
    let chb=await innframe.locator('[class="AB7Lab Id5V1"]').first().check()
    //await chb.click()
})
