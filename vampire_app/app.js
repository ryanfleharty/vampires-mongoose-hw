console.log("app.js loaded");



// 1. Require your node modules

const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);


const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires.js');


// 3. Connect your database and collection name

const connectionString = "mongodb://localhost/test"

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
	console.log(`Mongoose  connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () =>
{
	console.log(`Mongoose disconnected to ${connectionString}`);
});

mongoose.connection.on('error', (err) => {
	console.log(`Mongoose error: ${err}`);
});



// 4. Open your mongoose connection


/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you


// Vampire.collection.insertMany(vampireData,(err, data) => {
// 	if (!err) {console.log("added provided vampire data");}
// 	else {console.log("[app.js] MONGOOSE ERROR: -------- " + err);}
// 	mongoose.connection.close();
// });


// ### Add some new vampire data


// Vampire.create(
// 	{
// 		name: "Bob",
// 		hair_color: "brown",
// 		eye_color: "brown",
// 		dob: new Date(500, 0, 0, 0, 0),
// 		loves: ['Cinnamon Toast Crunch', 'Ernest Hemingway'],
// 		location: "Brooklyn",
// 		gender: "m",
// 		victims: 5
// 	},
// 	function (err, newVampire)
// 	{
// 		if (err) {console.log(err);}
// 		else {console.log("Created new vampire: " + newVampire);}
// 	}
// );

// Vampire.create(
// 	{
// 		name: "Susan",
// 		hair_color: "brown",
// 		eye_color: "brown",
// 		dob: new Date(1500, 0, 0, 0, 0),
// 		loves: ['Reddit'],
// 		location: "Normandy",
// 		gender: "f",
// 		victims: 5000
// 	},
// 	function (err, newVampire)
// 	{
// 		if (err) {console.log(err);}
// 		else {console.log("Created new vampire: " + newVampire);}
// 	}
// );


// Vampire.create(
// 	{
// 		name: "Jerry",
// 		hair_color: "black",
// 		eye_color: "brown",
// 		dob: new Date(1980, 0, 0, 0, 0),
// 		loves: ['Watching Netflix'],
// 		location: "Somewhere in small town America",
// 		gender: "m",
// 		victims: 1
// 	},
// 	function (err, newVampire)
// 	{
// 		if (err) {console.log(err);}
// 		else {console.log("Created new vampire: " + newVampire);}
// 	}
// );

// Vampire.create(
// 	{
// 		name: "Claire",
// 		hair_color: "brown",
// 		eye_color: "green",
// 		dob: new Date(758, 0, 0, 0, 0),
// 		loves: ['Ice cream'],
// 		location: "Wiltshire",
// 		gender: "f",
// 		victims: 53748
// 	},
// 	function (err, newVampire)
// 	{
// 		if (err) {console.log(err);}
// 		else {console.log("Created new vampire: " + newVampire);}
// 	}
// );


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



//DISCONNECT SERVER!!

// mongoose.disconnect(function()
// {
// 	console.log("Mongoose disconnected!");
// });