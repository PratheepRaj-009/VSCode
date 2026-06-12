import { test } from "@playwright/test"

import excel from 'exceljs'
import path from "path"

test("fetch single file", async ({ page }) => {
   let book = new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname, "../../Testdata/ExcelData.xlsx"))
   let sheet = book.getWorksheet("SingleData")
   // let data=await sheet.getRow(1).getCell(1).value
   let data = await sheet.getRow(1).getCell(1).toString()
   console.log(data);

})

test("fetch multiple data", async ({ page }) => {
   let book = new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname, "../../Testdata/ExcelData.xlsx"))
   let sheet = await book.getWorksheet("MultipleData")
   
   let data = []
   for (let row = 1; row <=  sheet.actualRowCount; row++) {
      for (let cell = 1; cell <= sheet.actualColumnCount; cell++) {
         let data1 = sheet.getRow(row).getCell(cell).toString()
        
         data.push(data1)
      }

   }
   console.log(data);

})
test.only("pass data to app", async ({ page }) => {
   let book = new excel.Workbook()
   await book.xlsx.readFile(path.join(__dirname, '../../Testdata/ExcelData.xlsx'))
   let sheet = book.getWorksheet('Credentials')
   let alldata = []
   for (let r = 1; r <= sheet.actualRowCount; r++) {
      let row = sheet.getRow(r)
      let url = row.getCell(1).toString()
      let usn = row.getCell(2).toString()
      let pwd = row.getCell(3).toString()
      alldata.push({ Url: url, username: usn, password: pwd })
   }
   console.log(alldata);

   for (let data of alldata) {
      await page.goto(data.Url)

      let pp = page.waitForEvent('popup')
      await page.getByRole('link', { name: "Small CRM" }).click()
      let page2 = await pp
      await page2.getByRole('link', { name: 'Admin' }).click()
      await page2.locator('#txtusername').fill(data.username)
      // await page.waitForTimeout(5000)
      await page2.locator('#txtpassword').fill(data.password)
      await page.waitForTimeout(5000)      
      await page2.getByRole('button', { name: 'Login' }).click()
      await page.waitForTimeout(5000)
   }

})
