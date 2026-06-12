import{expect, test} from"@playwright/test"
import fs from"fs"
let datafile=fs.readFileSync("C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/Testdata/jsondata.json")
let data=JSON.parse(datafile)
test.only("read json file",async({page})=>
{
    await page.goto(data.url)
    await page.locator('#username').fill(data.username)
    await page.locator('#password').fill(data.password)
    
    await page.getByRole("button",{name:'Submit'}).click()
    //await page.getByRole('link',{name:'Log out'}).waitFor({state:'attached'})
    let title= await page.title()
    await expect(title).toContain("Logged In Successfully | Practice Test Automation");
    console.log("valid credential");
    

})



let arrayobj=fs.readFileSync("C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/Testdata/jsonArrayOfObject.json")
let multidata=JSON.parse(arrayobj)
test("read array of object",async({page})=>
{
    for(let sindata of multidata)
    {
        let url=sindata.url
        let usn=sindata.username
        let pwd=sindata.password
        await page.goto(url)
    await page.locator('#username').fill(usn)
    await page.locator('#password').fill(pwd)
    
    await page.getByRole("button",{name:'Submit'}).click()
   let title=await page.title()
  // await expect(page.title()).toContain('Logged In Successfully | Practice Test Automation')
    if(title=='Logged In Successfully | Practice Test Automation')
        {
            console.log(usn+","+pwd+" "+"are valid credentials");
        }  
        else
            {
                console.log(usn+","+pwd+" "+"are not a valid credentials");
            }    
  
    }
    await page.waitForTimeout(5000)
})


// let obj=fs.readFileSync("C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/Testdata/jsonObjectMulti.json")
// let data1=JSON.parse(obj)

import data1 from"../../Testdata/jsonObjectMulti.json"
test("objArray",async({page})=>
{
    for(let key in data1)
    {
        for(let data of data1[key])
        {
            let url=data.url
            let username=data.username
            let password=data.password

            await page.goto(url)
            await page.locator("#username").fill(username)
            await page.locator("#password").fill(password)
            await page.getByRole("button",{name:'Submit'}).click()
            await page.waitForLoadState("load")
            let title=await page.title()
           // console.log(title);
            
            if(title=="Logged In Successfully | Practice Test Automation")
            {
                console.log(username+","+password+" "+"are valid credentials");   
            }
            else
            {
                console.log(username+","+password+" "+"are not a valid credentials");
            } 
            //await page.close()
        }
       //await page.waitForTimeout(5000)
    }
})
