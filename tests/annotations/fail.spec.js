import {test} from "@playwright/test"
test("test1",async()=>
{
    console.log("test1")
})

test("test2",async()=>
{
    console.log("test2")
})
test.fail("test3",async()=>
{
    console.log("test3")
})
test("test4",async()=>
{
    console.log("test4")
})