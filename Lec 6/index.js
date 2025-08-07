function starter(cb) {
    console.log("starter orderd");
    setTimeout(() => {
        console.log("starter served")
        cb();
    }, 1000);

}
function maincourse(cb) {
    console.log("maincourse orderd");
    setTimeout(() => {
        console.log("maincourse served")
        cb();
    }, 1000);
}

function sweets(cb) {
    console.log("sweets orderd");
    setTimeout(() => {
        console.log("sweets served")
        cb();
    }, 500);
}
function bill() {
    console.log("bill asked");
    setTimeout(() => {
        console.log("bill served")
    }, 20);
}

// starter(maincourse);

starter(function(){
    sweets(function(){
        maincourse(function(){
            bill(function(){

            })
        })
    })
})