import { expect } from "@playwright/test"

class selectedProduct
{
    constructor(newPage)
    {
        this.newpage=newPage
        this.addtocartBtn=newPage.locator("//input[@id='add-to-cart-button']")
        this.conformation=this.newpage.locator("//h1[contains(.,'Added to cart')]")
    }
    async addProductTocart()
    {
        await this.addtocartBtn.click()
       console.log(await this.conformation.textContent());
        await expect(this.conformation).toBeAttached()

    }
}
export default selectedProduct