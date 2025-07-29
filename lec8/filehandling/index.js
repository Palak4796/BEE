const fs=require("fs");
//write

// fs.writeFile("./dta.txt","heelo",function(err)
// {
//     if(err) console.log(err)
//         console.log("dta done")
// })

// fs.writeFile("./data.txt","",function(err)
// {
//     if(err) console.log(err)
//         console.log("dta done")
// })

//to add more in exisitng file 
// fs.appendFile("./demo.txt","hi",function(err)
// {
//     if(err) console.log(err)
//         console.log("not override")
// })

// fs.readFile("./data.txt","utf-8",function(err,data1)
// {
//     if(err) console.log(err);
//     else
//        return console.log(data1)

// })

// fs.readFile("./dta.txt","utf-8",function(err,data2)
// {
//     if(err) console.log(err);
//     else
//          return console.log(data2)

// })

// const finalData = data1 + "\n" + data2;

//         fs.writeFile("./final.txt", finalData, function (err) {
//             if (err) return console.log("Error writing final.txt:", err);

//             console.log("final.txt created successfully!");
//         })



fs.readFile("./data.txt", "utf-8", function (err, data1) {
    if (err) {
        console.log("Error reading data.txt:", err);
        return;
    }

    fs.readFile("./dta.txt", "utf-8", function (err, data2) {
        if (err) {
            console.log("Error reading dta.txt:", err);
            return;
        }

        const finalData = data1 + "\n" + data2;

        fs.writeFile("./final.txt", finalData, function (err) {
            if (err) {
                console.log("Error writing final.txt:", err);
                return;
            }

            console.log("final.txt created successfully!");
        });
    });
});


