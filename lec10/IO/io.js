import { isUtf8 } from "buffer";
import { resolve } from "path";

const fs=require("fs");

function myread(filepath)
{
    return new Promise((resolve,reject) => {
        fs.readFile("../data.json", "utf-8", function (err, data1) {

    let users=JSON.parse(data1);

     if (err) 
        return reject;
    return resolve(users);
 })

   })
 }


function mywrite(filepath,data)
{
    return new Promise((resolve,reject) => {
        fs.writeFile("./data.json",function(err,data) {
         if (err) 
        return reject;

        return resolve(users);
       
})
    
})
}

module.exports myread=myread;
module.exports mywrite=mywrite;