import{test} from "@playwright/test"
import path from "node:path"

test.only("single fileupload",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator('#singleFileInput').setInputFiles('C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/file/textFile.txt')
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,"../../file/textFile.txt"))
     await page.locator('#singleFileInput').setInputFiles([])
    await page.getByRole('button',{name:'Upload Single File'}).click()
    await page.waitForTimeout(5000)
    
    
})
test("multi fileupload",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/file/textFile.txt','C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/file/hi.xlsx'])
    await page.getByRole('button',{name:'Upload Multiple Files'}).click()
    await page.waitForTimeout(5000)
    
    
})
