class Amazon
{
    constructor(page)
    {
        this.page=page

        this.url="https://www.amazon.in/"
        //this.closeIcon=page.getByRole("button",{name:'✕'})
    }

    async launchApplication()
    {
        await this.page.goto(this.url)
       // await this.closeIcon.click()
    }
}
export default Amazon