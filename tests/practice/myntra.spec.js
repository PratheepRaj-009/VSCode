import{test} from"@playwright/test"

test("myntra",async({page})=>
{
    await page.goto("https://www.myntra.com/")
    let women=await page.locator("//a[.='Women']")
    await women.hover()
    await page.locator("//a[.='Tshirts']").first().click({timeout:3000})
    await page.locator("//input[@type='checkbox' and @value='SZN']/following-sibling::div").click()
   
    let leftslid=await page.locator("#rootRailThumbLeft")
    await leftslid.hover()
    let lbBox=await leftslid.boundingBox()
    await page.mouse.down()
    await page.mouse.move(lbBox.x+90,lbBox.y)
    await page.mouse.up()
    let rightslid=await page.locator("#rootRailThumbRight")
    await rightslid.hover()
    let rbBox=await rightslid.boundingBox()
    await page.mouse.down()
    await page.mouse.move(rbBox.x,rbBox.x+160)
    await page.mouse.up()
    
    await page.locator("//input[@type='checkbox' and @value='Black']/following-sibling::div").click()
    //adding product for the first time 
    let items=await page.locator("//ul[@class='results-base']//div[@class='product-ratingsContainer']/span[number(text())>4]/ancestor::li[@class='product-base']")
    let [page2]=await Promise.all([
       page.waitForEvent("popup"),
       //page.locator("//ul[@class='results-base']//div[@class='product-ratingsContainer']/span[number(text())>4]/ancestor::li[@class='product-base']").first().click()
        items.first().click()
    ])
    await page2.locator("//p[contains(@class,'size') and .='S']").click()
    await page2.locator("//div[contains(@class,'pdp-add-to-bag')]").click()
    
    let [page3]=await Promise.all([
        page2.waitForEvent('popup'),
        page2.locator("(//div[@class='similar-container']//div[@class='product-item-container'])[1]").click()
    ])
      await  page3.waitForLoadState("load")
     // await page3.pause()
    await page3.locator("//p[@class='size-buttons-unified-size' and text()='XL']").click()
   
    await page3.locator("//div[contains(@class,'pdp-add-to-bag')]").click()
    await page3.waitForLoadState("load")
     await page3.locator("//span[@class='desktop-userTitle' and .='Bag']").click()
     await page3.waitForLoadState("load")
    await page3.screenshot({path:"C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/screenshot/myntraaddedproduct.png"})
    await page3.locator("(//*[name()='svg' and @class='itemContainer-base-closeIcon'])[2]").click()
    await page3.getByRole("button",{name:'REMOVE'}).nth(1).click()
    await  page3.waitForLoadState("load")
    await page3.screenshot({path:"C:/Users/PRATHEEP RAJ S/OneDrive/Desktop/Playwrite/screenshot/afterremoveingtheproduct.png"})
    let totalprice=await page3.locator("(//span[.='Total Amount']/..//span)[4]").textContent()
    console.log(totalprice);
    await page3.locator("//div[.='ENTER PIN CODE']").click()
    await page3.locator("#pincode").fill("560010")
    await page3.locator("//div[contains(@class,'base-valid') and .='CHECK']").click()
    let deliverydate=await page3.locator("//div[contains(@class,'deliveryDateContainer')]//span[@class='itemComponents-base-highlightedMessage  ']").textContent()
    console.log(deliverydate);
    


})
