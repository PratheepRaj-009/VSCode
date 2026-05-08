import{test} from"@playwright/test"
import Amazon from "../../pom/Amazon/launchApplication.js"
import Hompage from "../../pom/Amazon/homePage.page.js"
import Products from "../../pom/Amazon/products.page.js"
import selectedProduct from "../../pom/Amazon/selectedProduct.page.js"

test("testing1",async({page})=>
{
   let amazon= new Amazon(page)
   let hmpage= new Hompage(page)
   let products= new Products(page)
   
   await amazon.launchApplication()
   await hmpage.sesarchProduct('shoes')
   await hmpage.selectFormAutoSugg(' stand for home metal')
   let newpage=await products.clickOnProduct()
   let selectedproduct= new selectedProduct(newpage)

   await selectedproduct.addProductTocart()
   //await page.waitForTimeout(5000)
})