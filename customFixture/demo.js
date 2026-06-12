import{test as base} from"@playwright/test"
    export const test=base.extend({
        login: async({page},use)=>
        {
            await page.goto("https://www.flipkart.com")

            await use()
            console.log("execution completed ");
        }
   
   } )