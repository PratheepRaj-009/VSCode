import{test} from"../../customFixture/withSessionStorage.js"

test("login with session",async({loginpage})=>
{
    await loginpage.goto("http://localhost:8888/index.php?action=index&module=Home")
    await loginpage.getByRole("link",{name:'Dashboard'}).click()
    await loginpage.pause()
})