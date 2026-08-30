
// reduce
//accumulator - a variable provides for storing value of operation
// current value
//initial value

 const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`)
//     return acc + currVal
// }, 0)


// using arrow function

const myTotal = myNums.reduce( (acc, curr) => acc+curr , 0)
//console.log(myTotal);

//example of shopping cart

const shoppingCart = [
    {
        itemName: "java course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc,item) => acc +item.price, 0)
console.log(priceToPay);