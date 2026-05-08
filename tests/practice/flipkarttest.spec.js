import{expect, test} from"@playwright/test"
test("flipkart",async({page})=>
    {
        await page.goto("https://www.flipkart.com")
        await page.locator("//span[text()='✕']").click({timeout:5000})
        await page.locator("//form//input[@placeholder='Search for Products, Brands and More']").fill("watch")
        await page.locator("//li[@class='Swx5kP']//div[contains(.,'es for men')]//div[text()='in Wrist Watches']").click()
        
        await page.waitForTimeout(3000)
       // let txt=await page.locator("//li[@class='Swx5kP']").allTextContents()
       // console.log(txt)
       // await page.pause()
        await expect(page).toHaveScreenshot("image1.png")
        await page.waitForLoadState('load')
        //await page.getByRole("checkbox").first().click()
    })
    test.only("flipkart1",async({page})=>
    {
        await page.goto("https://www.flipkart.com")
        await page.locator("//span[text()='✕']").click({timeout:5000})
        await page.waitForTimeout(3000)
         await expect(page).toHaveScreenshot("image2.png")
         await page.waitForTimeout(3000)
        console.log("dfgyuiouuytr");
        
    })
