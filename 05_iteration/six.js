
// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item

// })
// console.log(values);
// for each loop kuch value return nhi karta hai

//to return a value from array with condition we can use "filter"
const myNums = [1, 2, 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)

// const newNums = []
// myNums.forEach( (num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

//map
// const newNums = myNums.map( (num) => num+10)
// console.log(newNums);

//chaining

const newNums = myNums
                   .map((num) => num * 10)
                   .map( (num) => num+1)
                   .filter( (num) => num >= 40)

 console.log(newNums);                  
                    