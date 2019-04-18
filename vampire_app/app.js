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

// console.log("adding given objects:")
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

// console.log("All the female vampires:");
// Vampire.find({gender: 'f'}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(item.name);
// 	});
// });

// console.log("Greater than 500 victims:");
// Vampire.find({victims: {$gt: 500}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(item.name);
// 	});
// });

// console.log("Victims less than or equal to 150:");
// Vampire.find({victims: {$lte: 150}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(item.name);
// 	});
// });

// console.log("Victim count not equal to 210234:");
// Vampire.find({victims: {$ne: 210234}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(item.name);
// 	});
// });

// console.log("Greater than 150, fewer than 500 victims:");
// Vampire.find({victims: {$gt: 150, $lt: 500}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(item.name);
// 	});
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist

// console.log("All the vampires that have a title:");
// Vampire.find({title: {$exists: true}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(`${item.name} - ${item.title}`);
// 	});
// });

// console.log("All the vampires that do not have victims:");
// Vampire.find({victims: {$exists: false}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(`${item.name}`);
// 	});
// });

// console.log("All the vampires that have a title AND no victims:");
// Vampire.find({title: {exists: true}, victims: {$exists: false}}, function(err, foundVampires)
// {
// 	foundVampires.forEach(function(item)
// 	{
// 		console.log(`${item.name}`);
// 	});
// });

console.log("Have victims, and victims greater than 1000:");
Vampire.find({victims: {$exists: true, $gt: 1000}}, function(err, foundVampires)
{
	foundVampires.forEach(function(item)
	{
		console.log(`${item.name}`);
	});
});

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