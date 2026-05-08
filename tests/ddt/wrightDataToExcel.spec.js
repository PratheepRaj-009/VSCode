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
    let no=await element.count()
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