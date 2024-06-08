/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/



let a = prompt("Enter the first number");
let b = prompt("Enter the operation");
let c = prompt("Enter the last number");

let random = Math.random();

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {

  console.log(random);
    alert(`The result is : ${eval(`${a} ${b} ${c}`)}`);
    
} else {

  b = obj[b];
  console.log(random);
    alert(`The result is : ${eval(`${a} ${b} ${c}`)}`);
    
}
