let p = new Promise((resolve , reject)=>{

    let age = 22;

    if(age > 20)
    {
        resolve ("User is allowed to vote")
    }
    else
    {
        reject("not allowed to vote !!!")
    }

})

p.then((data)=>{
    console.log(data);

}).catch((err)=>{
    console.log(err)
})