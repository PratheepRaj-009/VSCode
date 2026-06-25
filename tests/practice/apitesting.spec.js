import{test}from"@playwright/test"

test("testing the API response ", async({request})=>
{
    let response=await request.get("https://airportgap.com/api/airports")

    let body=await response.json()
    console.log(body.data[0]);

})