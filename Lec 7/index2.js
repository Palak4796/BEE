const users = [
    {
        id : 1,
        name : "Upnit Singh",
        age : 22
    },
    {
        id : 2,
        name : "Kashish",
        age : 23
    }

]

function isAllowed(id)
{
    return new Promise((resolve,reject)=>{
        let user = null;
        for(let i = 0 ; i < users.length ; i++)
        {
            if(users[i].id == id)
            {
                user = users[i];
            }
        }

        if(!user) return reject("no user found");
        if(user.age < 18 ) return reject("Not allowed to vote");

        resolve("User is allowed to vote ");
    })
}

isAllowed(2).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});