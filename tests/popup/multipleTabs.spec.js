import{test} from"@playwright/test"

test("handel mul win",async({browser})=>
{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder('Search Amazon.in').fill("watch")
    await page.locator('[role="gridcell"]').first().waitFor()
    let allAddress= await page.locator('[role="gridcell"]').all()
    console.log(allAddress);

    for(let address of allAddress )
    {
        let text=await address.textContent()
        //console.log(text);
        if(text.includes('watch box organiser'))
        {

            await address.click()
            break;
        }
        
        
    }
     await page.locator("//span[text()='LEDO']").last().waitFor({state:"attached"})
     let text1=await page.locator("//span[text()='LEDO']").innerText()
        console.log("for ledo"+text1);
    







})