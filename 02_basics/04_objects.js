
//const tinderUser = new Object();//---> singletone obj
const tinderUser={}// ---> nonsingletoneobj

tinderUser.id="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "hitesh",
            lastname : "chowdhory"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1 = {1 : "a" , 2 :"b"}
const obj2 = {3 : "a" , 4 :"b"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({} , obj1, obj2)
const obj3 = {...obj1,...obj2}//spread operator
console.log(obj3)



const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh" 
}
//course.courseInstructor ----> normal method


// destructuring objects
const {courseInstructor:instructor} = course
console.log(instructor);


//API s
//object form
// {
//     "name" : "sneha",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

//arrays form
// [
//     {},
//     {},
//     {}
// ]
