const fs=require("fs");
const {myread, mywrite} =require('../IO');
// fs.readFile("../data.json", "utf-8", function (err, data1) {
//     if (err) 
//         console.log("Error reading data.txt:", err);
//     let users=JSON.parse(data1);
    

//     fs.readFile("../userdata.json", "utf-8", function (err, data2) {
//     if (err) 
//         console.log("Error reading data.txt:", err);
//     let users2=JSON.parse(data2);


//     //spread operator array ke element ko bhr 
//     // console.log(...users);
//     // console.log(...users2);
//     // let us=[...users,...users2];
//     let us=users.concat(users2);


//     // let users3= data1+data2;
    
//     fs.writeFile("./data.json",JSON.stringify(us),function(err)
//     {
//         if(err) return console.log("error");
//     });

// });
// });


// let data1=fs.readFileSync("../data.json","utf-8");
// let data2=fs.readFileSync("../userdata.json","utf-8");
// let user1=JSON.parse(data1);
// let users2=JSON.parse(data2);
// let alluser=[...user1,...users2];
// try
// {
//   fs.writeFileSync("./sync.json",JSON.stringify(alluser));
// }
// catch(err)
// {
//     console.log(err);
// }


async function task(params) {
  try {
    let data1=await myread("../data.json");
    let data2=await mywrite("../userdata.json");

    let res=[...data1, ...data2];
    let message=await mywrite("../sync.json",res);
  }
  catch(err) {
     console.log(err);
  }

  }
  
task();