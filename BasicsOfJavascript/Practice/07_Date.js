let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreatedDate=new Date("2014-07-23")

let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

myCreatedDate.toLocaleString('default',{
    weekday:"long"
})

