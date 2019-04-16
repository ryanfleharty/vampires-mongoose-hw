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

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

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
