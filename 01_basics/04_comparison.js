console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// comparison btw different data types
console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null>=0);
// the reason is that an equality check == and comparison > < >= <= work differently .
//comparisons convert null to a number , treating it as 0. thats why (3) null >=0 is true and (1)null>0 is false


console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);


// ===
console.log("2" === 2); // false --- it checks the data type is different