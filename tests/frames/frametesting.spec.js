import { test } from "@playwright/test";

test("frametest",async({page})=>
{
   await page.goto("https://ui.vision/demo/webtest/frames/")
   console.log(await page.frames().length);
   let frame1=await page.frameLocator("//frame[@src='frame_1.html']")
   await frame1.locator("//input[@name='mytext1']").fill("hii")
    
})