const data = {
  username: "Pranto Goswamee",
  email: "pranto@gmail.com",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to our website`);
  },
};

data.welcomeMessage();
data.username = "KING";
data.welcomeMessage();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

const addOne = (num1, num2) => num1 + num2;

const addZero = (num1, num2) => (num1 + num2);

console.log(addTwo(1, 1));
console.log(addOne(1, 1));
console.log(addZero(1, 1));
