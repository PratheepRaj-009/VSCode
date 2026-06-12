import{test} from"@playwright/test"

test("e2e",async({page})=>
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.getByPlaceholder('Username').fill("Admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button',{name:' Login '}).click()
    await page.waitForLoadState("load")
    await page.locator("//span[.='PIM']").click()
    await page.locator("//button[contains(.,' Add ')]").click()
    await page.waitForLoadState("load")
    let firstName="govind9"
    let LastName="raj"
    await page.locator("//input[@name='firstName']").fill(firstName)
    await page.locator("[placeholder='Last Name']").fill(LastName)

    await page.locator("input[type='file']").setInputFiles("C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/screenshot/amazon21_16.0.31.png")
    await page.locator("//span[contains(@class,'oxd-switch-input')]").click()
    let username="GovindRaj9"
    let password="Govind@123"

    await page.locator("//label[.='Username']/../following-sibling::div/input").fill(username)
    await page.locator("//label[.='Password']/../following-sibling::div/input").fill(password)
    await page.locator("//label[.='Confirm Password']/../following-sibling::div/input").fill(password)
    await page.locator("//button[@type='submit']").click()
    // await page.getByPlaceholder("Type for hints...").fill(firstName)
    // await page.getByRole('button',{name:" Search "}).click()
    // await page.locator("//div[.='"+firstName+"']/ancestor::div[contains(@class,'oxd-table-row oxd-table')]").click()
    await page.getByPlaceholder("Middle Name").fill("nn")
    await page.locator("(//button[@type='submit'])[1]").click()
    await page.locator("//span[.='Leave']").click()
    await page.locator("//a[.='Assign Leave']").click()
    await page.getByPlaceholder("Type for hints...").fill(firstName)
    await page.locator("//div[@role='listbox']//span[contains(.,'"+firstName+"')]").waitFor()
    await page.locator("//div[@role='listbox']//span[contains(.,'"+firstName+"')]").click()
    await page.locator("//label[.='Leave Type']/../..//div[@class='oxd-select-wrapper']").click()
    await page.locator("//span[.='CAN - Bereavement']").click()
    await page.locator("//label[.='From Date']/../..//div[@class='oxd-date-input']").click()
    await page.locator("//div[@class='oxd-calendar-date' and .='27']").click()
    await page.locator("//label[.='To Date']/../..//div[@class='oxd-date-input']").click()
    await page.locator("//div[@class='oxd-calendar-date' and .='30']").click()
    await page.locator("//button[@type='submit']").click()
    await page.locator("//li[@class='oxd-userdropdown']").click()
    await page.locator("//a[.='Logout']").click()
    await page.getByPlaceholder('Username').fill(username)
    await page.getByPlaceholder('Password').fill(password)
    await page.getByRole('button',{name:' Login '}).click()
    await page.waitForLoadState("load")
    await page.locator("//span[.='Leave']").click()

})

/*Login as Admin
Add employee
Upload profile image
Create login credentials
Search employee
Edit employee details
Assign leave
Logout
Login as employee
Apply leave
Admin approves leave
Selenium Concepts
File upload
Tables
Search filters
Role-based login
Multi-user flow*/ 