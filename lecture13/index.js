const fs=require("fs");
const express=require("express")
const app=express();

app.use(express.static(__dirname+"/public"));

app.use(express.urlencoded({extended:true}));



// app.get("/contact.html",(req,res)=>{
//      res.sendFile(__dirname+"/contact.html")

// }) //same work done by public folder here donot need to make ant extra files and get request 



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post("/register",(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;

    console.log(email,password);
   
    let user={
       email:email,
        password:password
    }
    let alluser=[];
    fs.readFile("./data.json","utf-8",function(err,data){
    if(err) return res.send(err);
    if (data)
    {
        alluser=JSON.parse(data);
    }
    alluser.push(user);
        fs.writeFile("./data.json",JSON.stringify(alluser),function(err)
    {
        if(err) return res.send(err)
    })
res.send("ok")
       
})

})

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    fs.readFile("./data.json", "utf-8", function (err, data) {
        if (err) return res.send("Error reading user data");

        let users = [];
        if (data) {
            users = JSON.parse(data);
        }

        const found = users.find(user => user.email === email && user.password === password);

        if (found) {
            res.send("Login successful!");
            console.log("Login Sucessfull!!");
        } else {
            res.send("Invalid username or password.");
        }
    });
});


app.listen(4444,()=>
{
    console.log("server is listening");
})