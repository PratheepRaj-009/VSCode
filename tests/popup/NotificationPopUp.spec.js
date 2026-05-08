//Notification popups are browser level popups which is just asking us a permission
//Through playwright we are just grant or deny the permission 
//Bydefault in playwright the permissions are denied
//Notification popup will not intrupt our execution like dialogs 
import{test} from"@playwright/test"

test("notification",async({browser})=>
{
    let context=await browser.newContext(/*{permissions:['notifications']}*/)
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0")
    await page.getByRole("button",{name:'Notification'}).click()
    let notify=await page.evaluate(()=>{return Notification.requestPermission()})//it will execute in the browser level
    console.log(`permission:${notify}`);
    await context.clearPermissions()
    let notify2=await page.evaluate(()=>{return Notification.requestPermission()})//it will execute in the browser level
    console.log(`permission:${notify2}`);
    await page.waitForTimeout(5000)
})