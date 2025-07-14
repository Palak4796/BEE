console.log("hello");
function delay(){
    let currtime= new Date().getTime()
    while(new Date().getTime()-currtime<4000)
    {

    }
  console.log("delay done")
}

setTimeout(delay,0);
console.log("bye")
function sum(a,b){
    console.log(a+b)

}

sum(2,5);
sum(6,7);


//promise code 
// create a function which return a promise to multiply two numbers 
//a and b if a>10
function multiply(a,b)
{
    return new Promise((resolve,reject)=>{
        if(a>10) 
            {return resolve(a*b)
            }
            else 
            {

        reject("a is less than 10");
            }
})
}

//promise will run before the settimeout 
multiply(5,6).then((data)=>{
    console.log(data);
})
.catch((err=>{
    console.log(err);
}))