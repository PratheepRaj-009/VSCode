class Products
{
    constructor(page)
    {
        this.page=page
        this.product=page.locator("//h2//span[contains(.,'NYALKARAN Shoe Rack with Shelf | Foldable Plastic')]")
    }

    async clickOnProduct()
    {
        // let [newPage]=await Promise.all([
        //     this.page.waitForEvent('popup'),
        //     this.product.click()
        // ])

        let p2=this.page.waitForEvent('popup')
            await this.product.click()
        let newPage=await p2
        return newPage
    }
}
export default Products