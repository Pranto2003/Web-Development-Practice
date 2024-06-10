let arr = [9, 8, 7, 6, 5, 4, 3];

arr.pop(8);
arr.push(100);
arr.push("Pranto");

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

arr.shift(); //removes the first element of array
console.log("After using Shift");
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

arr.unshift("Goswamee"); //adds element in first index
console.log("After using Unshift");
for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

