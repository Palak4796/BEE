const fs=require("fs");
 let users=[
    {
        id:1,
        name:"plk",
        email:"palak@gmail.com",
        address:"abccolony",
        password:"123"

    },
    {
        id:2,
        name:"mhk",
        email:"mhk@gmail.com",
        address:"abolony",
        password:"143"
    }
 ]

 fs.writeFile("./data.json",JSON.stringify(users),function(err)
{
    if(err) return console.log("error");
})