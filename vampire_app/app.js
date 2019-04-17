// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const populateVampires = require('./populateVampires')
const vampire = require('./models/vampire')
// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';
// 4. Open your mongoose connection
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose disconnected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// populateVampires.forEach((vamp) => {
//     vampire.create({
//         name : vamp.name,
//         hair_color : vamp.hair_color,
//         eye_color : vamp.eye_color,
//         dob : vamp.dob,
//         loves : vamp.loves,
//         location : vamp.location,
//         gender : vamp.gender,
//         victims: vamp.victims
//     }, (err, createdVampire) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVampire)
//         }
//     });
// });

// ### Add some new vampire data

// vampire.create({
//     name : 'Darla',
//     hair_color : 'blonde',
//     eye_color : 'blue',
//     dob : Date("1934-12-01T02:57:00Z"),
//     loves: ['small-ish puppies', 'water balloons', 'pokemon'],
//     location: 'Santa Monica, California',
//     gender: 'f',
//     victims: 5
//     }, (err, createdVampire) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVampire);
//         }
//     });

// vampire.create({
//     name : 'Kris Kingle',
//     hair_color : 'white',
//     eye_color : 'blue',
//     dob : Date("1639-12-25T12:11:00Z"),
//     loves: ['red', 'elves', 'elvis'],
//     location: 'The North Pole',
//     gender: 'm',
//     victims: 1000009
//     }, (err, createdVampire) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVampire);
//         }
//     });

// vampire.create({
//     name : 'Rainbow Fish',
//     hair_color : 'rainbow',
//     eye_color : 'fish eyes',
//     dob : Date("1039-01-01T01:01:00Z"),
//     loves: ['his scales', 'not sharing with friends', 'water'],
//     location: 'Ocean',
//     gender: 'm',
//     victims: 0
//     }, (err, createdVampire) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVampire);
//         }
//     });

// vampire.create({
//     name : 'Sr. Anthony Hokins',
//     hair_color : 'white',
//     eye_color : 'black/red',
//     dob : Date("1949-06-23T01:01:00Z"),
//     loves: ['zoro', 'being knighted', 'the queen'],
//     location: 'UK',
//     gender: 'f',
//     victims: 18
//     }, (err, createdVampire) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVampire);
//         }
//     });


/////////////////////////////////////////////////
// ## QUERYING
// vampire.find({gender:'f'}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({victims: {$gt: 500}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({victims: {$lte: 150}}, (err, foundVampires) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(foundVampires)
//         }
//     });

// vampire.find({victims: {$ne: 210234}}, (err, foundVampires) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(foundVampires)
//         }
//     });

// vampire.find({victims: {$lt: 500, $gt: 150}}, (err, foundVampires) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(foundVampires)
//         }
//     });


/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// vampire.find({name: {$exists: true}}, (err, foundVampires) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(foundVampires)
//             }
//         });

// vampire.find({victims: {$exists: false}}, (err, foundVampires) => {
//             if(err){
//                 console.log(err);
//             } else {
//                 console.log(foundVampires)
//             }
//         });
// vampire.find({victims: {$exists: false}, name: {$exists: true}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({victims: {$exists: true, $gt: 1000}}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });



/////////////////////////////////////////////////
// ### Select with OR
// vampire.find({$or:[
//     {location: 'New York, New York, US'},
//     {location: 'New Orleans, Louisiana, US'}
//     ]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({$or:[
//     {loves: 'brooding'},
//     {loves: 'being tragic'}
//     ]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({$or:[
//     {loves: 'marshmallows'},
//     {victims: {$gt: 1000}}
//     ]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
//     }
// });

// vampire.find({$or:[
//     {hair_color: 'red'},
//     {eye_color: 'green'}
//     ]}, (err, foundVampires) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(foundVampires)
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
