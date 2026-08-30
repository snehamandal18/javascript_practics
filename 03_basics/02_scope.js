
//{} --> scope when it comes with func , if else etc
var c = 300
//globalscope
if(true){
    //block scope
    let a =10
    const b = 20
    var c = 30
}
console.log(a);//error
console.log(b);//error
console.log(c);//30
// global scope is available for block but block scope is not available for global


//+++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++
console.log(addone(5))// no error
function addone(num){
    return num + 1;
}

addTwo(5) // error (cannot access 'addTwo' before initiatization)

const addTwo = function(num) {
    return num+2
}

