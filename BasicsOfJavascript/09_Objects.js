//Literal Object = In one object we can store another objects and so on

let myObj = {
  name: "Pranto",
  "Full-Name ": "Pranto Goswamee",
  mail: "prantogoswamee@gmail.com",
  location: "Bangladesh",
  age: 21,
};

console.log(myObj.mail);
console.log(myObj["location"]);
console.log(myObj["Full-Name "]);

myObj.greeting = function () {
  console.log(`Hello , I am ${this["Full-Name "]}`);
};

console.log(myObj.greeting());

//Singleton Object = We can't assign a new object in a singleton object

let obj = new Object();

obj.realName = "KING";
obj.email = "king@gmail.com";

console.log(Object.assign({}, myObj, obj));

console.log({ ...myObj, ...obj });

const { mail } = myObj;
console.log(mail);

const {location : country}=myObj
console.log(country); 