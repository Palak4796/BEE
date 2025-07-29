const fs=require("fs");

fs.readFile("../data.json", "utf-8", function (err, data) {
    if (err) {
        console.log("Error reading data.txt:", err);
        
    }
    let users=JSON.parse(data)
    return console.log(users[1]);
});
