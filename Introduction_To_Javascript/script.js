var a = 10;
var b = 20;
var c = "Pranto";
console.log(a + b);
console.log(typeof a, typeof b, typeof c);

let o = {
  "name ": "Pranto",
  "Job Position": "CEO",
  "Position Code": 4560,
};

console.log(o);
o.salary = "500 Crores";
console.log("After Adding Salary :");
console.log(o);


console.log("Practicing loops");
for (let i = 0; i < 10; i++){
  console.log(a, "X", i, " = ", a*i);
}
