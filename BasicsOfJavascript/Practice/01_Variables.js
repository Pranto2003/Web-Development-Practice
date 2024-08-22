const accountId = 12345;
let name = "Pranto Goswamee";
let deposit = 50000;
let accountState;

console.log();
console.log("---------------Account Information----------------");
console.log("Account ID :-> " + accountId);
console.log("Account Holder's Name :-> " + name);
console.log("Deposit :-> " + deposit);

console.table([accountId, name, deposit, accountState]);
