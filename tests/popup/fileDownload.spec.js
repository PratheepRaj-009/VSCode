import{test} from"@playwright/test"
import path from "node:path"
import fs from"fs"

test.only("downloadfiles",async({browser})=>
{
    let context=await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("hihejbkbllo")
    console.log(await page.locator("#writeArea").inputValue())
   
    let [downloads]=await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button',{name:'Download'}).click()
    ])
    
   let location=path.join(__dirname,'../../downloadedFiles')
    //let filename=downloads.suggestedFilename()
   let num=Math.floor( Math.random()*1000)
   // await downloads.saveAs(path.join(location,filename))
    await downloads.saveAs(path.join(location,"newone"+num+".txt"))

    console.log(await downloads.path());
    

    await page.waitForTimeout(5000)



})

test("download to local machine", async({page})=>
{
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.locator("#writeArea").fill("hihejbkbllo")   
    let [download]= await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button',{name:'Download'}).click()
    ])
    let folderpath=path.join("C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/dummydownload","filename.txt")
    await download.saveAs(folderpath)

   if(fs.existsSync(folderpath))// verifying the file is exists or not
   {
    console.log("file is exist");
    
   }
   else
     {
    console.log("file is not exist");
   }
   let text=fs.readFileSync(folderpath,'utf-8')
   expect(text,'')
})