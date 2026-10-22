import {test,expect} from "@playwright/test"

test("spell bee test ", async({page})=>
{
    await page.goto("https://www.nytimes.com/puzzles/spelling-bee")
    await expect(page).toHaveURL("https://www.nytimes.com/puzzles/spelling-bee")
    let rejectAllBtn=page.locator("//div[@id='fides-banner']//span[.='Reject all']")
    await rejectAllBtn.waitFor({state:"attached"})
    await rejectAllBtn.click()
    //await page.locator("//div[@id='fides-banner']//span[.='Reject all']").waitFor({state:"attached"})
    //await page.pause()
    let playBtn=page.getByRole("button",{name:"Play"});
    await expect(playBtn).toBeEnabled()
    //await page.getByRole("button",{name:"Play"}).click()
    await playBtn.click()
    const letters=await page.locator("//*[name()='svg']//*[name()='text']").allTextContents()
    for(let ch of letters)
    {
        console.log(ch);
        if(/[a-z]/.test(ch))
        {   
            continue;
        }
        else{
            console.log("not matching");
            break;
        }
    }
   
    //await expect(page.getByText("Spelling Bee"))
}
)
