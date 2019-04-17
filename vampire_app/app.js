// 1. Require your node modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));


// 2. Require your model (and possibly your extra data source);
const vampire = require('./models/vampire');

// 3. Connect your database and collection name
const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/vampires';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected from ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose err: ${err}`);
});

// 4. Open your mongoose connection
// with node app.js

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
const vampireData = require('./populateVampires');

// vampire.collection.insertMany(vampireData, (err, data) => {
//     console.log('added provided vamp data');
//     mongoose.connection.close();
// });

// ### Add some new vampire data
const Vampire = require('./models/vampire');
// Vampire.create({
//     name: "Random Nameless Vampire",
//     hair_color: "purple",
//     eye_color: "black",
//     dob: 1924,
//     loves: ['sucking blood', 'sucking at life'],
//     location: 'Berlin, Germany',
//     gender: 'male',
//     victims: 2.5,
// })

// Vampire.create({
//     name: "Another Rando Vampire",
//     hair_color: "black",
//     eye_color: "yellow",
//     dob: 2011,
//     loves: ['junk food', 'sucking at life'],
//     location: 'Boulder, CO',
//     gender: 'male',
//     victims: 170,
// })

// Vampire.create({
//     name: "Random Lady Vampire",
//     hair_color: "brown",
//     eye_color: "green",
//     dob: 1899,
//     loves: ['sucking at life', 'sucking even more at life'],
//     location: 'Middle of Nowhere',
//     gender: 'female',
//     victims: 12380,
// })

// Vampire.create({
//     name: "None of Your Business",
//     hair_color: "red",
//     eye_color: "brown",
//     dob: 1282,
//     loves: ['kicking ass', 'taking names'],
//     location: 'NYC',
//     gender: 'female',
//     victims: 4329,
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// 1
// vampire.find({gender: 'female'}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

// vampire.find({gender: 'f'}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 2
// vampire.find({victims: {$gt: 500}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 3
// vampire.find({victims: {$lte: 150}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 4
// vampire.find({victims: {$ne: 210234}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 



// 5
// vampire.find({victims: {$gt: 150, $lt: 500}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// 1
// vampire.find({title: {$exists: true}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 2
// vampire.find({victims: {$exists: false}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 3
// vampire.find(
//     {title: {$exists: true}, victims: {$exists: false} }, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 4
// vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

/////////////////////////////////////////////////
// ### Select with OR

// 1
// vampire.find(
//     {
//         $or: [{
//             location: 'New York, New York, US', location: 'New Orleans, Louisiana, US'
//         }]}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 2
// vampire.find(
//     {
//         $or: [{
//             loves: 'brooding', loves: 'being tragic'
//         }]}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 3
// vampire.find(
//     {
//         $or: [{
//             victims: {$gt: 1000}}, 
//             {loves: 'marshmallows'}
//         ]}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 


// 4 
// vampire.find(
//     {
//         $or: [{
//             hair_color: 'red'}, 
//             {eye_color: 'green'
//         }]}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

/////////////////////////////////////////////////
//### Select objects that match one of several values

// 1
// vampire.find(
//     {
//         $or: [{
//             loves: 'frilly shirtsleeves', 
//             loves: 'frilly collars'
//         }]}, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

// 2
// vampire.find(
//     {
//         loves: 'brooding'
//         }, (err, found) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(found)
//     }
// }); 

// 3
// vampire.find({
//     $or: [{
//         loves: 'appearing innocent',
//         loves: 'trickery',
//         loves: 'lurking in rotting mansions',
//         loves: 'R&B music',
//     }]}, (err, found) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log(found);
//         }
// });

// 4
// vampire.find({
//         loves: 'fancy cloaks'}, 
//         {$nin: 'top hats', 
//         $nin: 'virgin blood'
//     }, (err, found) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log(found);
//         }
// });

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
