const fs=  require('fs');
 console.log("start");
 
 setTimeout(()=>{
    console.log("Timner 1");
 },0)

 setImmediate(()=>{
    console.log("Immediate 1");
 })

 fs.readFile("demo.txt","utf-8",(err,data)=>{
    if (err) return console.log(err);
     console.log(data);

     setTimeout(()=>{
    console.log("Timner 2");
 },2)

 setImmediate(()=>{
    console.log("Immediate 1");
 }) 
 process.nextTick(()=>{
    console.log("hey here is tick1 ");

})
 })

 function fn(){
    console.log("fun");
 }
fn();
function multiply(a,b)
{
    return new Promise((resolve,reject)=>{
        if(a>10) 
            {
             setTimeout(()=>{
               resolve(a*b)
             }) 
            }
            else 
            {  reject("a is less than 10");}
})

}

//promise will run before the settimeout 
multiply(40,6).then((data)=>{
    console.log(data);
})
.catch((err=>{
    console.log(err);
}))

process.nextTick(()=>{
    console.log("hey here is tick2");

})


console.log("end");
