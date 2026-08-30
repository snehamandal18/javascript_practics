
// func def
function sayMyName() {
    console.log("S");
    console.log("n");
    console.log("e");
    console.log("h");
    console.log("a");
}
//func call
//sayMyName();

// function addTwoNumbers(num1, num2)
// {
//     console.log(num1+num2);
// }
// addTwoNumbers(3,4);

//another method
function addTwoNumbers(num1, num2)
 {
     return num1+num2;
}

const result = addTwoNumbers(3,5)
//console.log("Result:",result);
function loginUserMessage(username)
{
    if(! username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
} 
//console.log(loginUserMessage("sneha"))

//rest operator   -->   ...
function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,400,500));


const user = {
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)

//you can pass obj directly
handleObject({
    username:"sne",
    price: 399
})

// passing array as parameter
const myNewArray  = [200, 400, 600 , 100];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,3000,400,500]));

