import { test } from "@playwright/test"
import path from "node:path"

test("taking screenshot", async ({ page }) => {
    await page.goto("https://www.amazon.in/")
    try {
        await page.locator("//input[@id='twotabsearchtextbox']").fill("shoes")
         let dateobj = new Date()
        let time = dateobj.getDate() + "_" + dateobj.getHours() + "." + dateobj.getMinutes() + "." + dateobj.getSeconds()
        console.log(time);
        
    }
    catch (error) {
       
        await page.screenshot({ path: path.join("screenshot", "amazon" + time + ".png") })
        throw error
    }
})