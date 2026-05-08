class Hompage
{
    constructor(page)
    {
        this.searchTF=page.getByPlaceholder('Search Amazon.in')
        this.loginLink=page.locator('//a[@href="/account/login?ret=/"]')
        this.cartLink=page.locator('//span[text()="Cart"]')
        this.autoSugg=page.locator('//span[@class="s-heavy"]')
    }

    async sesarchProduct(item)
    {
        await this.searchTF.fill(item)
    }

    async selectFormAutoSugg(product)
    {
        await this.autoSugg.nth(1).waitFor()
        let count=await this.autoSugg.count()
       for(let i=0; i<count; i++)
        {
            let text=await this.autoSugg.nth(i).textContent()

            if(text.includes(product))
            {
                await this.autoSugg.nth(i).click()
                
                break;
            }
            else{
                console.log(text+" is not correct product");
                
            }
        }
    }
}
export default Hompage