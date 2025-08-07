let product =
    [
        {
            id: 1,
            name: "Iphone",
            ammount: 80000
        }
    ]

let balance = 100000;

function buyproduct(product_name) {

    return new Promise((resolve, reject) => {
        for (let i = 0; i < product.length; i++) {
            if (product[i].name == product_name) {
                console.log(product[i].name, "is Your Product")
                return resolve(product[i].ammount);

            }
        }
         reject("Product not found");
    })

   
}


function pay(ammount) {

    return new Promise ((resolve,reject)=>{
         if (balance > ammount) {
        balance = balance - ammount;
         return resolve("product purchased")
        

    }
        reject("bank balance is low");
    })
   

    
}

// buyproduct("Iphone", function (err, data) {
//     if (err)
//         return console.log(err);

//     pay(data, function (err, data) {
//         if (err) return console.log(err);

//         console.log(data);

//     })

// })

buyproduct("Iphone")
.then((data)=>{
    console.log(data);
    return pay(data);
})
.then((message)=>{
    console.log(message);
})
.catch((err)=>{
    console.log(err)
})

