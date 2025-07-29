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

buyProduct("samsung")
.then((data)=> {
    return pay(data)

})

.then((message)=>{
    console.log(message)
})

.catch((err)=>{
    console.log(err)
})

console.log("hey man");

//async / await helps to write promise in syn manner in syntax form 

