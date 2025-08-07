// const order=[
//     {item:"laptop",qty:1,price:5000},
//     {item:"mouse",qty:2,price:500},
//     {item:"monitor",qty:1,price:8000},
//     {item:"cable",qty:3,price:200},

// ]
// //higher order function pls read that used in react 

// const totalPurchase=order.reduce((total,curr)=>{
//     return total +curr.qty *curr.price;
// },0);

// const expensiveItems = order .filter(curr => curr.qty * curr.price > 1000) 
// .map(curr => curr.item);

// console.log("Total Purchase:", totalPurchase); 
// console.log("Items > 1000:", expensiveItems); 



//Q2
//is all the students adult
//is there any student whose s ore is more than 90

// .every .some 

const childrenScores =[
    {name:"plk",score:92,age:25},
    {name:"mhk",score:88,age:17},
    {name:"ram",score:79,age:30},
    {name:"nina",score:95,age:16}
]


function checkAtleastOne()
{
     let res=false
     let count=0;
for(let i=0;i<childrenScores.length;i++)
{
   
    if(childrenScores[i].age>18)
    {
res=true
count++;
    }
}
return [res,count]
}

console.log(checkAtleastOne())
// console.log(childrenScores.filter(curr=>curr*score>=90))


// //Q3
// //Find the length of the last word of the string 
// let str='fasddf rtf rggg ttgg'

// console.log(str.trim().split(' ').at(-1).length)

// //Q4
// //return the repetitive values in the arr
// let nums=[1,2,3,4,2,2,1]
let unique=[]
for(let i of nums)
{
    if(unique.hasOwnProperty(i))
    {
        unique(i)++

    }
    else{
        unique[i]=1
    }
    console.log(unique)
}

// //Q5
// //implement the palidrome
console.log(palidrome(122221))
function palidrome(num)
{
    let n=num
    let sum=0;
    while(n>0)
    {
        sum=sum*10+num%10;
        num=Math.floor(num/10)
    }
    sum==num?true:false
}

//q6
//find the sqrt root of 49 

//Q7
// find accurance of the string 