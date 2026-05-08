import{test} from"@playwright/test"
test("get by role",async({page})=>
{
    await page.goto("https://www.flipkart.com/")
    await page.getByRole("button",{name:'✕'}).click()
    await page.locator('//form//input[@placeholder="Search for Products, Brands and More"]').fill('shoes')
    await page.locator('//li[@class="Swx5kP"]//div[@class]/following-sibling::div').first().waitFor()
    let texts=await page.locator('//li[@class="Swx5kP"]//div[@class]/following-sibling::div').allTextContents()
   console.log(texts);
   
    await page.pause()
    





})