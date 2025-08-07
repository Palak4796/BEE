let product =
    [
        {
            id: 1,
            name: "Iphone",
            ammount: 80000
        }
    ]

let balance = 100000;

function buyproduct(product_name, cb) {
    for (let i = 0; i < product.length; i++) {
        if (product[i].name == product_name) {
            console.log(product[i].name,"is Your Product")
            return cb(null, product[i].ammount);

        }
    }
    cb("Product not found", null)
}


function pay(ammount, cb) {
    if (balance > ammount) {
        balance = balance - ammount;
        cb(null, "product purchased")
        return console.log("Thanks for Visitting!!!")
        
    }

    cb("bank balance is low", null);
}

buyproduct("Iphone", function (err, data) {
    if (err)
        return console.log(err);

    pay(data, function (err, data) {
        if (err) return console.log(err);

        console.log(data);

    })

})

