import{test} from"@playwright/test"
test("screenshot",async({page})=>
{
    await page.goto("https://www.amazon.com")
    await page.locator("#nav-cart").waitFor()
    let dateobj= new Date()
    let date=dateobj.getDate()
    let hour=dateobj.getHours()
    let min=dateobj.getMinutes()
    let sec=dateobj.getSeconds
    let time=date+"_"+hour+"."+min+"."+sec
    // let da= Date.now()
    // console.log(da);
    
    await page.screenshot({path:"screenshot/hompage"+time+".png"})

})