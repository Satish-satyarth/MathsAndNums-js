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

// ---------- Maths ------------------

let play = 4578;
console.log(Math.min(12,54,78,95,12,10,4567));
console.log(Math.min(12,54,78,95,12,10,4567));

console.log(Math.abs(-4));
console.log(Math.sqrt(2));

console.log(Math.ceil(8.5697));
console.log(Math.floor(8.5697));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);