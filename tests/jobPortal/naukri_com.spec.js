import { test, expect } from "@playwright/test"
import path from "node:path";

test("upload resume", async ({ page }) => {


    let expected = "Resume has been successfully uploaded.";

    await page.goto("https://www.naukri.com/")
    await page.waitForLoadState("load")

    let loginBtn= page.locator("#login_Layer")
   // await loginBtn.waitFor({state:"visible"});
    await loginBtn.click()

    await page.locator("//input[@placeholder='Enter your active Email ID / Username']").fill("pratheep.te09@gmail.com")

    await page.locator("//input[@placeholder='Enter your password']").fill("Stalliin@1")

    await page.locator("//button[text()='Login']").click()

    try {

        await page.locator("//a[@href='/mnjuser/profile']").click()

    }
    catch (error) {
        try {

            await page.locator("//div[contains(@class,'crossIcon')]").click()

            await page.locator("//a[@href='/mnjuser/profile']").click()
        }
        catch (error) {
            await page.locator("//a[normalize-space(.)='Complete profile']").click()
        }
    }


    await page.locator("//div[@aria-label='Resume']").scrollIntoViewIfNeeded()
    try {
        console.log("try");

        let text = await page.locator("//span[text()='Upload resume']").textContent({ timeout: 3000 });

        console.log("Text:", JSON.stringify(text));
        console.log("Type:", typeof text);
        console.log("Trimmed text:", JSON.stringify(text?.trim()));
        console.log("Comparison result:", text?.trim() === "Upload resume");

        if (text?.trim() === "Upload resume") {
            console.log("Entered into IF block");

            //let path1=path.join(__dirname,"Testdata/Pratheep_Raj__Resume.pdf")
            let path1 = path.join(__dirname, "..", "..", "Testdata", "Pratheep_Raj__Resume.pdf");

            let upload = page.locator("//span[.='Upload resume']")

            let [file] = await Promise.all([

                page.waitForEvent("filechooser"),
                upload.click()
            ])
            console.log("Resume path:", path1);

            file.setFiles(path1)

            let actual = await page.locator("//p[@class='msg']").textContent()
            console.log(actual);
            expect(actual).toBe(expected)
            
            console.log("upload Ended");
        }
    }
    catch (error) {

        console.log("Is page closed?", page.isClosed());

        let text = await page.locator("//input[@value='Update resume']").getAttribute("value")
        console.log(text)
        if (text === "Update resume") {


            let path1 = path.join(__dirname, "..", "..", "Testdata", "Pratheep_Raj__Resume.pdf");

            let update = page.locator("(//input[@type='file'])[1]")
            update.setInputFiles(path1);


            let actual = await page.locator("//p[@class='msg']").textContent()

            console.log(actual);

            expect(actual).toBe(expected)

            console.log("update ended");

        }
        else {
            console.error("cannot find Update rerume ");


        }
    }
})
