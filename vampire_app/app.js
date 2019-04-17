// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const vampiresArr = require('./populateVampires')
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';
// 4. Open your mongoose connection
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true    // these were fixes for 'deprication warnings'
});

mongoose.connection.on('connected', ()=>{
  console.log(`mongoose connect to ${connectionString}`);
})
mongoose.connection.on('disconnected', ()=>{
  console.log(`mongoose disconnect to ${connectionString}`);
})
mongoose.connection.on('error', (err)=>{
  console.log(`mongoose err: ${err}`);
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// vampiresArr.forEach(function(currVamp){
//   Vampire.create({
//     name: currVamp.name,
//     hair_color: currVamp.hair_color,
//     eye_color: currVamp.eye_color,
//     dob: currVamp.dob,
//     loves: currVamp.loves,
//     location: currVamp.location,
//     gender: currVamp.gender,
//     victims: currVamp.victims,
//   }),
//   (err, createdVamp)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log(createdVamp);
//     }
//   }
// })
// ### Add some new vampire data
// vampiresArr.forEach(function(currVamp){
//   Vampire.updateOne({
//     name: currVamp.name
//   },
//   { $set:{
//     name: currVamp.name,
//     hair_color: currVamp.hair_color,
//     eye_color: currVamp.eye_color,
//     dob: currVamp.dob,
//     loves: currVamp.loves,
//     location: currVamp.location,
//     gender: currVamp.gender,
//     victims: currVamp.victims,
//   }},
//   {
//     upsert: true
//   },
//   (err, createdVamp)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log(createdVamp);
//     }
//   })
// })
///////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({
//   gener: 'f'
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: {$gt: 500}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: {$lte: 150}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: 210234
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: {$gt:{150}}
//   victims: {$lt:{500}}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({
//   title: {$exists: true}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: {$exists: false}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   title: {$exists: true},
//   victims: {$exists: false}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   victims: {$exists: true},
//   victims: {$gt: 1000}
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({
//   $or:[
//   {location: 'New York, New York, US'},
//   {location: "New Orleans, Louisiana, US"}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   $or:[
//   {location: 'New York, New York, US'},
//   {location: "New Orleans, Louisiana, US"}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   $or:[
//   {location: 'New York, New York, US'},
//   {location: "New Orleans, Louisiana, US"}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   $or:[
//   {loves: {$all: ['brooding']}},
//   {loves: {$all: ['being tragic']}}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   $or:[
//   {victims: {$gt: 1000}},
//   {loves: {$all: ['marshmmallows']}}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

// Vampire.find({
//   $or:[
//   {hair_color: 'red'},
//   {eye_color: 'green'}
// ]
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection
// Vampire.find({
//   victims: {$not:{$gt: 1000}},
// },
// (err,foundVamp)=>{
//       if (err){
//         console.log(err);
//       } else {
//         console.log(foundVamp);
//       }
// }
// )
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Vampire.updateMany({
//     loves: {$exists: true}
//   },
//   { $push:{
//     loves: "tennis"
//   }},
//   (err, createdVamp)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log(createdVamp);
//     }
//   })
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Vampire.deleteMany({
//     victims: {$lt: 500}
//   },
//   (err, response) => {
//     if (err){
//       console.log(err);
//     } else {
//     console.log(response); //just tells you the action was successful
//   }}
// );
/////////////////////////////////////////////////
