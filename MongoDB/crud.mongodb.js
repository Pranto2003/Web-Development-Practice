
//CRUD Operations

use("CrudDB")

//Create 
db.createCollection("coures")

// db.coures.insertOne({
//     "name":"Aurther",
//     "price":0,
//     "assignments":12,
//     "projects":45
// })

// db.coures.insertMany(
//     [
//         {
//           "name": "Bella",
//           "price": 150,
//           "assignments": 8,
//           "projects": 20
//         },
//         {
//           "name": "Charles",
//           "price": 200,
//           "assignments": 5,
//           "projects": 30
//         },
//         {
//           "name": "Diana",
//           "price": 120,
//           "assignments": 10,
//           "projects": 40
//         },
//         {
//           "name": "Edward",
//           "price": 50,
//           "assignments": 15,
//           "projects": 10
//         },
//         {
//           "name": "Fiona",
//           "price": 300,
//           "assignments": 7,
//           "projects": 35
//         },
//         {
//           "name": "George",
//           "price": 100,
//           "assignments": 9,
//           "projects": 25
//         },
//         {
//           "name": "Helen",
//           "price": 180,
//           "assignments": 14,
//           "projects": 50
//         },
//         {
//           "name": "Isaac",
//           "price": 75,
//           "assignments": 11,
//           "projects": 60
//         },
//         {
//           "name": "Julia",
//           "price": 220,
//           "assignments": 6,
//           "projects": 15
//         },
//         {
//           "name": "Kevin",
//           "price": 90,
//           "assignments": 13,
//           "projects": 55
//         }
//       ]
      
// )

//Read
// db.coures.find({"price":0})

//Update
// db.coures.update({"price":0} ,{$set:{"price":100}})
// db.coures.update({"price":0} ,{$set:{"price":1000}})

//Delete
// db.coures.deleteOne({"price":1000})
// db.coures.deleteMany({"price":1000})