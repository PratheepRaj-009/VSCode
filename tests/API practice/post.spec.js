import{test} from"@playwright/test"

test("Add new pet",async({request})=>
{
    let response=await request.post("https://petstore.swagger.io/v2/pet",{
  "data":
  {"id": 1,
  "category": {
    "id": 2,
    "name": "ram"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
        
      "id": 2,
      "name": "string"
    }
  ],
  "status": "available"
}
})

console.log("HEADER: ",await response.headers());
console.log(`Status Code ${await response.status()}`);

})