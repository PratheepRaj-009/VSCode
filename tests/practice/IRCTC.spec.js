import{test} from"@playwright/test"

test("irctc train ticket",async({page})=>
{
    await page.goto("https://www.irctc.co.in/nget/train-search")
    await page.waitForLoadState('load',{timeout:100000})
    await page.locator("//input[@aria-label='Enter From station. Input is Mandatory.']").fill("Bengalu")
    await page.locator("//span[@class='ng-star-inserted' and contains(.,' BENGALURU CANT - BNC ')]").click()
    await page.locator("//input[contains(@aria-label,'Enter To station.')]").fill("mumbai")
    await page.locator("//span[@class='ng-star-inserted' and contains(.,' MUMBAI CENTRAL - MMCT ')]").click()
    await page.locator("//p-calendar//input").click()
    let date=12
    await page.locator("//div[contains(@class,'ui-datepicker-calendar-container ')]//a[contains(@class,'ui-state-default') and .='"+date+"']").click()
    await page.locator("//span[.='All Classes']").click()
    await page.locator("//span[.='AC 2 Tier (2A)']").click()
    await page.locator("//span[.='GENERAL']").click()
    await page.locator("//span[.='TATKAL']").click()
    await page.getByRole("button",{name:" Search Trains "}).click()
    await page.waitForTimeout(5000)
    let names=await page.locator("//div[contains(@class,'white-back n')]//div[contains(@class,'col-xs-5 ')]").allTextContents()
    for(let name of names)
    {
        console.log(name);
        
    }
    const refreshButtons = page.locator("//strong[.='AC 2 Tier (2A)']/../following-sibling::div[.=' Refresh ']")
    const count = await refreshButtons.count()
    console.log(count)

    for (let i = 0; i < count; i++) {
        console.log(i)
        const refreshButton = refreshButtons.nth(i)
        try {
            if (await refreshButton.isVisible()) 
                {
                await refreshButton.click({ timeout: 10000 })
                await page.waitForTimeout(1000)
            } 
            else {
                console.log(`Refresh button ${i} is not visible, skipping`)
            }
        } catch (error) {
            console.log(`Refresh click ${i} failed: ${error.message}`)
        }
    }

    await page.waitForSelector("//span[@class='ng-star-inserted']/strong")
    let price = await page.locator("//span[@class='ng-star-inserted']/strong").allTextContents()
    console.log(price);
   
    
    await page.locator("(//span[contains(@class,'ui-slider-handle')])[5]").hover()
    let leftslid=await page.locator("(//span[contains(@class,'ui-slider-handle')])[5]").boundingBox()
    await page.mouse.down()
    await page.mouse.move(leftslid.x+120,0)
    await page.mouse.up()

})