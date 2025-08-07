const fs=require("fs");
const express= require('express');
const app=express();

app.use(express.urlencoded({extended:true})); // it parse form urlencoded to object 

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/users",(req,res)=>
{
    let username=req.body.username;
    let password=req.body.password;

    console.log(username,password);
    // let result=[{username,password}];
    //it only adds in the object form and if we make an array it stores it as in one variable and different array which cannot be accessed
    //therefore read it in arr and if it is right store in format and push it in the file
    //
    let user={
        username:username,
        password:password
    }
    let alluser=[];
    fs.readFile("./data.json","utf-8",function(err,data)
{
    if(err) return console.log("error");
    if (data)
    {
        alluser=JSON.parse(data);
    }
    alluser.push(user);
        fs.writeFile("./data.json",JSON.stringify(alluser),function(err)
    {
        if(err) return console.log("error");
    })
    
    res.send("check console");

})

})



app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    fs.readFile("./data.json", "utf-8", function (err, data) {
        if (err) return res.send("Error reading user data");

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const found = users.find(user => user.username === username && user.password === password);

        if (found) {
            res.send("Login successful!");
            console.log("Login Sucessfull!!");
        } else {
            res.send("Invalid username or password.");
        }
    });
});

app.get("/login",(req,res)=>
{
    res.sendFile(__dirname+"/index2.html")
})

app.listen(4000,()=>
{
    console.log("server is listening");
})
