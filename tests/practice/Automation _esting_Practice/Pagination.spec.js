import { test, expect } from "@playwright/test";

test("Pagination", async ({ page }) => {

    let product="Wireless Mouse 20"
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded()
    let count=await page.locator("//ul[@id='pagination']/li/a").all()
    let no=count.length
    for( let i=1;i<=no; i++)
    {
    try{
    await expect(page.locator("//td[.='"+product+"']")).toBeVisible()
    let element=page.locator("//td[.='"+product+"']/..//input[@type='checkbox']")
    await element.click()
    await expect(element).toBeChecked()
    break;
    }
    catch(error)
    {
        await page.locator("//ul[@id='pagination']/li/a[.='"+(i+1)+"']").click()
    }
    }
   // await page.pause()

});


test("Pagination price validxation", async ({ page }) => {

    let product="Wireless Mouse 20"
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded()
    let count=await page.locator("//ul[@id='pagination']/li/a").count()
    //let no=count.length
    for( let i=1;i<=count; i++)
    {
    try{
    await expect(page.locator("//td[.='"+product+"']")).toBeVisible()
    let element=await page.locator("//td[.='Wireless Mouse 20']/following-sibling::td[1]").innerText()
        
    let text=Number(element.replace("$",""))
    console.log(text);
    
    expect(text).toBeLessThan(200)
    // await expect(element).toBeChecked()
    break;
    }
    catch(error)
    {
        await page.locator("//ul[@id='pagination']/li/a[.='"+(i+1)+"']").click()
    }
    }
   // await page.pause()

});

test("Pagination find cheapest product", async ({ page }) => {

    //let product="Wireless Mouse 20"
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveTitle("Automation Testing Practice")
    await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded()
    // Counting the pages
    let count=await page.locator("//ul[@id='pagination']/li/a").all()
    let no=count.length
    let value=[]
    for( let i=1;i<=no; i++)
    {
        //counting the product
        let pcount=await page.locator("//h2[.='Pagination Web Table']/..//tbody/tr/td[3]").count()
        for(let j=1; j<=pcount; j++ )
        {
            // Featching the price
        let text=await page.locator("//h2[.='Pagination Web Table']/..//tbody/tr["+j+"]/td[3]").innerText()
        //Adding the price to array
        value.push(Number(text.replace("$","")))
        }
        //move to next page
        await page.locator("//ul[@id='pagination']/li/a[.='"+(i+1)+"']").click()
    }
    //console.log(value);
    
    // Identify the minimum value
    let min=Math.min(...value)
    let str=String(min)
    let price=`$${str}`
    
    for(let i=1; i<=no; i++)
    {
        try{
        //search for the product
        await expect(page.locator("//h2[.='Pagination Web Table']/..//tbody/tr/td[.='"+price+"']")).toBeVisible()
        //check the checkbox
        let checkBox=page.locator("//h2[.='Pagination Web Table']/..//tbody/tr/td[.='"+price+"']/..//input")
        await checkBox.click()
        await expect(checkBox).toBeChecked()
        break;
        }
        catch(error)
        {
            //to move next page
            if(i<no){
            await page.locator("//ul[@id='pagination']/li/a[.='"+i+"']").click()
            }
        }

    }
    

   //await page.pause()

});