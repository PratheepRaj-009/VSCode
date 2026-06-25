import{test} from"@playwright/test"

import excel from"exceljs"
import path from "path"

test("wright data",async({page})=>
{
    let book= new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname, "../../Testdata/ExcelData.xlsx"))
    let sheetname="sheet5"
    let sheet=book.getWorksheet(sheetname)
    if(!sheet)
    {
        sheet=book.addWorksheet(sheetname)
    }

    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder('Search Amazon.in').fill("shoes")
    await page.locator("//div[contains(@id,'sac-suggestion-row')]//span").first().waitFor()
    let element=await page.locator("//div[contains(@id,'sac-suggestion-row')]//div[@aria-label]")
    let no=await element.count
    let texts=[]
    for(let i=0; i<no; i++)
    {
        let data=await element.nth(i).getAttribute('aria-label')
        texts.push(data)
    }
    console.log(texts);
    for(let text of texts)
    {
        let i=texts.indexOf(text)
        sheet.getRow(i+1).getCell(1).value=text

    }
     await book.xlsx.writeFile(path.join(__dirname, "../../Testdata/ExcelData.xlsx"))
    
    await page.waitForTimeout(5000)
})

test("new data entring",async({page})=>
{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../Testdata/ExcelData.xlsx"))
    let sheetname="govind"
    let sheet=await book.getWorksheet(sheetname)
    if(!sheet)
    {
        sheet=book.addWorksheet(sheetname)
    }

    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@role='button' and .='✕']").click()
    let search =await page.locator("//input[@class='nw1UBF v1zwn25']").first()
    await search.click()
    await search.fill("shoes")
    await page.locator("//li[@class='Swx5kP']").first().waitFor()
    let element=await page.locator("//li[@class='Swx5kP']//div[contains(.,' ')]//span[text()='shoes']").allTextContents()
    let no=await element.length
    let allText=[]
    for(let i=0; i<no; i++)
    {
       let text=await element.nth(i).textContent()
       await allText.push(text)
    }

    for(let text of allText)
    {
        let i=allText.indexOf(text)
        sheet.getRow(i+1).getCell(1).value=text
    }
    await book.xlsx.writeFile(path.join(__dirname,"../../Testdata/ExcelData.xlsx"))
    await page.waitForTimeout(5000)

})