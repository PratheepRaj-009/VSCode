import {test} from "@playwright/test"
test("test1 aha",async()=>
{
    console.log("test1")
})

test.only("test2",async()=>
{
    console.log("test2")
})
test("test3",async()=>
{
    console.log("test3")
})
test("test4",async()=>
{
    console.log("test4")
})