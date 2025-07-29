//to write promise in sync way 

let products=[
    {
        id:1,
        name:"Iphone16",
        price:100000

    },
    {
       id:2,
        name:"samsung",
        price:5000   
    }
]

let bankBalance= 100000;
function buyProduct(product_name)
{
    return new Promise ((resolve, reject)=>
    {
        for(let i=0;i<products.length;i++)
            if(products[i].name==product_name)
            {
                return resolve(products[i].price)
            }
           reject ("no product found")
    })
}


function pay(amount)
{
    return new Promise((resolve,reject)=>
    {
        if(bankBalance>amount)
        {
            bankBalance=bankBalance-amount;
            return resolve("product is successfully purchased");
        }

        reject ("bank balance is low")
    })
}

function add(a,b)
{
    return a+b
}

 async function purchase()
{
    try{

let amount=await buyProduct("samsung");
let message=await pay(amount);
// console.log(amount);
console.log(message);
    }
    catch(err)
    {
        console.log(err);
    }
}

let re=purchase()

console.log(re)

let result=add(2,4);
console.log(result)
