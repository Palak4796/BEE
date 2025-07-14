function add(a,b)
{
    return a+b
}

function sub(a,b)
{
    return a-b;
}

function mul(a,b)
{
    return a*b;
}
console.log("util", module.exports);

module.exports.add=add;
module.exports.sub=sub;
module.exports.mul=mul;

//alternate way to export
module.exports={
    add,
    sub,
    mul
}

console.log({}=={}); // this will be false as these have the different referene
