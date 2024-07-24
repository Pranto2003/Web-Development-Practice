const score = 100;
const balance = new Number(400);

console.log(score);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

let b = score.toPrecision(3); //returns a string
console.log(b - 3);

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

let a = -4;
console.log(Math.abs(a));
console.log(Math.round(4.9));



//When I need a specific minimum  number

let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
