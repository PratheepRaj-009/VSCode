import{test as base} from"@playwright/test"

export const test=base.extend({
    loginpage:async({browser},use)=>
    {
        let context=await browser.newContext({storageState: "auth.json"})
        let page=await context.newPage()
        await use(page)
        await context.close();
        console.log("tearDown");
        
    }
})