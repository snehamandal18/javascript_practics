
// singletone


// object literals
//Object.create-----> constructor method isike andaar singletone banta hai


const mySym = Symbol("key1")
const jsUser = {
    name: "Hitesh",
    "full name" : "Sneha Mandal",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
}
//how to access
// console.log(jsUser.email);
// console.log(jsUser["email"]);//right way to access objects

// how to change value
jsUser.email = "hitesh@chatgpt.com"

// lock the value
//Object.freeze(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
    
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

