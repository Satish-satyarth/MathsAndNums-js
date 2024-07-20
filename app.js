// Nums and Math

// --------  Numbers -----------
const nums = 100;
// console.log(nums);

const score = new Number(4587);
// console.log(score);

/*The toFixed() method converts a number to a string.
The toFixed() method rounds the string to a specified number of decimals.*/

console.log(score.toFixed(2));

let price = 123.56;
console.log(score.toPrecision(4));

//The toLocaleString() returns a number as a string, using local language format.
let accBalance = 1000000000;
console.log(accBalance.toLocaleString());

// en- In -> represents Indian format.
 console.log(accBalance.toLocaleString("en-IN"));
