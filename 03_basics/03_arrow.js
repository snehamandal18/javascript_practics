
// "this" ---> used for current context inside the {}
const user = {
    username: "sneha",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);// o/p --> {}



// function chai(){
//     let username = "sneha"
//     console.log(this.username) // o/p --> undefined [we cannot use this inside a function only we can use it inside objects]
// }
// chai()

//******** Arrow func *******

const chai = () =>{
    let username = "sneha"
    console.log(this.username) //o/p - > undefined
}
chai()


// basic syntax 
// const addTwo = (num1,num2) => {
//     return num1+num2
// }


//implict return
// const addTwo = (num1,num2) =>  num1+num2
// const addTwo = (num1,num2) =>  (num1+num2)

// if we use { } --> we have to use return but if we use () in implicit return we dont have to use return

const addTwo = (num1,num2) =>  ({username: "sneha"})
// in case of returning any object we have to wrap it into a ( )
console.log(addTwo(3,4));


