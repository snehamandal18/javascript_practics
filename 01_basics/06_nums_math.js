
const score = 400;
//console.log(score);
const balance = new Number(100)
//console.log(balance);
//console.log(balance.toString().length);
// toFixed --> counts digits only after the decimal point
//console.log(balance.toFixed(2));

//toPrecision() --> returns a string representing a number to a specified number of significant digits
// counts all significant digits, including those before the decimal.

const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3));//23.9

const otherNumber1 = 123.8966
//console.log(otherNumber1.toPrecision(3));//124

const otherNumber2 = 1123.8966
//console.log(otherNumber2.toPrecision(3));//1.12e+3

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//++++++++++++++++++++++++++++    Maths   +++++++++++++++++++++++++++++
//console.log(Math);
//console.log(Math.abs(-4));//4
//console.log(Math.round(4.6))//5
//console.log(Math.ceil(4.2));//5
//console.log(Math.floor(4.2));//4
//console.log(Math.min(4,3,6,8))//3
//console.log(Math.max(4,3,6,8))//8

console.log(Math.random());//iska answer always 0 se 1 k b/w ayega
console.log((Math.random()*10) + 1);
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20 ;
 console.log(Math.floor(Math.random() * (max-min+1)) + min);





