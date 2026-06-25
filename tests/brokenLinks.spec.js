import{test} from"@playwright/test"

test("testing broken links ", async({page,request})=>
{
    await page.goto("https://www.ediblearrangements.com/")
    let links=await page.locator("//a").evaluateAll((elements)=>{ return elements.map((e)=>{return e.href})})
    console.log(links.length);
    
    console.log(links)
    console.log(typeof(links))
    let str="hbsdshjad"
    
    
let no=1
    for(let link of links)
    {
        // if(link)
        // {
        //     continue;

        // }
        //console.log(typeof link);
        
        
        if(link )
        {
            
            console.log(no)
        let response=await request.get(link)
        let statuscode= await response.status()
        if(statuscode>=400)
        {
            console.log(`Broken link: ${link}-> ${statuscode}`);
            
        }
        else{
            console.log(`Active link: ${link}-> ${statuscode}`);
        }
        
        }
        no++
    }




})