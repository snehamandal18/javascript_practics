
// primitive datatypes

// 7 types : String , number , boolean , null , undefined , symbol , BigInt

// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false 
 const outSideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')
 console.log(id===anotherId); // false

// Reference(Non primitive)
//Array,object Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name:"sneha",
    age : 21 ,

}
const myFunction = function(){
    console.log("Hello World");
}

// to know the data typye we can use type of function
console.log(typeof scoreValue); // number 
/* undefined -> undefined
null - > object
boolean -> boolean
number -> number 
String -> string 
object (native and does not implement) -> object
object (native or host and does implement) -> function */


// memory
//stack (primitive) , heap (non primitive)

