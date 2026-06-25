import{expect, test} from"@playwright/test"

test("handlling dialogs",async({page})=>
{
   await page.goto('https://testautomationpractice.blogspot.com/')
//    await page.getByRole("button",{name:'Confirmation Alert'}).click()
//    await page.waitForTimeout(5000)
//    await expect(page.locator('#demo').textContent()).toContaint('Cancel!')

    page.on("dialog",async(dialog)=>
    {
        if(dialog.type()=='alert')
        {
            console.log(await dialog.message())
            await  dialog.accept()
        }
        else if(dialog.type()=='confirm')
        {
            await  dialog.accept()
        }
        else if(dialog.type()=='prompt')
        {
            console.log( await dialog.defaultValue());
            
            await  dialog.accept('hi this is PratheepRaj')
        }
    })
     await page.getByRole("button",{name:'Simple Alert'}).click()
    console.log(await page.locator('#demo').textContent());
     
    await page.getByRole("button",{name:'Prompt Alert'}).click()
    await expect(await page.locator('#demo')).toContainText('Hello hi this is PratheepRaj!')
    console.log(await page.locator('#demo').textContent());
   
    await page.getByRole("button",{name:'Confirmation Alert'}).click()
    await expect(await page.locator('#demo').textContent()).toBe('You pressed OK!')
    console.log(await page.locator('#demo').textContent());
    
    

    await page.waitForTimeout(5000)
})
test("page once",async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/')
        await page.getByRole('button',{name:'Prompt Alert'}).click()
        page.once("dialog",async(dialog)=>
        {
            await dialog.accept("hello")
        })
        await page.getByRole('button',{name:'Prompt Alert'}).click()
        console.log(await page.locator('#demo').textContent());
    })
