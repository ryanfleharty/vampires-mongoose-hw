const vampire = require('./models/vampire');
// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const vampires = require('./populateVampires');

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';

// 4. Open your mongoose connection
mongoose.connect(connectionString, {
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

vampire.collection.insertMany(vampires,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });

// ### Add some new vampire data

// vampire.create({
//     name: 'Vlad the Impaler',
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     dob: 1655,
//     loves: ['walks on the beach', 'death metal'],
//     location: 'Romania',
//     gender: 'm',
//     victims: 350
//     },(err, createdVamp) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
//     })

// vampire.create({
//     name: 'Steven Danger',
//     hair_color: 'black',
//     eye_color: 'blue',
//     dob: 1985,
//     loves: ['walks on the beach', 'death metal'],
//     location: 'Canada',
//     gender: 'm',
//     victims: 100
//     },(err, createdVamp) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
//     })

// vampire.create({
//     name: 'Buffy',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: 1989,
//     loves: ['slaying', 'her cat salem'],
//     location: 'California',
//     gender: 'f',
//     victims: 1000
//     },(err, createdVamp) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
//     })

// vampire.create({
//     name: 'Sookie Stackhouse',
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     dob: 1980,
//     loves: ['reading folks minds', 'werewolfs'],
//     location: 'Bon Temps',
//     gender: 'f',
//     victims: 20
//     },(err, createdVamp) => {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
//     })

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

//1. 
// vampire.find({gender:'f'}, (err, foundVampires) => {
//     if(err){
//     console.log(err);
//     } else {
//     console.log(foundVampires);
//     }
// });

//2.
// vampire.find({victims: {$gt: 500}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//3.
// vampire.find({victims: {$lte: 150}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//4.
// vampire.find({victims: {$ne: 210234}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//5. 
// vampire.find({victims: {$lt: 500, $gt: 150}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

//1.
// vampire.find({title: {$exists: true}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(fouundVampires);
//     }
// });

//2. 
// vampire.find({victims: {$exists: false}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//3.
// vampire.find({title: {$exists: true}, victims: {$exists: false}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//4.
// vampire.find({victim: {$exists: true, $gt: 1000}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

/////////////////////////////////////////////////
// ### Select with OR

//1.
// vampire.find({$or: [{location: "New York, New York, US"}, {location: "New Orleans, Louisiana, US"}]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//2. 
// vampire.find({$or: [{loves:'brooding'}, {loves: 'being tragic'}]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//3.
// vampire.find({$or: [{victims: {$gt: 1000}}, {loves: 'marshmallows'}]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

//4.
// vampire.find({$or: [{hair: 'red'}, {eyes: 'green'}]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires);
//     }
// });

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
