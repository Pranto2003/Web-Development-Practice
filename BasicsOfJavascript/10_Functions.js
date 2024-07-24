// function sayMyname() {
//   console.log("Pranto");
//   console.log("Goswamee");
// }

// sayMyname();

// function addNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addNumbers(number1, number2) {
  return number1 + number2;
}

let result = addNumbers(2, 3);

console.log("Result : " + result);
console.log("Result : " + addNumbers(5, 8));

function loginData(userName) {
  return `${userName} just LOGGED IN`;
}

console.log(loginData("Pranto"));

