// 1. Require your node modules
//purpose is to connect to our database

const mongoose = require('mongoose');
const Vampire = require('./models/vampire.js');
const vampireData = require('./populateVampires');
//the end of the string names your db in mongodb
//locally the string is always pretty much the same
//the end test will be different. The last part is creating a database
//called 'test' unless there is one already called 'test', in which 
//case it will connect to it.

//when we deploy we will have changes to where our mongodb is 
//being hosted
const connectionString = 'mongodb://localhost/vampire';

//this creates the connection to the mongodb server
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connect to ${connectionString}');
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected to ${connectionString}');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose err ${err}');
});

// Vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });
// 2. Require your model (and possibly your extra data source);

// 3. Connect your database and collection name

// 4. Open your mongoose connection

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data
//Using the create method, create 4 new vampires with any qualities that you
// like two should be male and two should be female.
// Vampire.create({
// 	name:'vamp eyre',
//     hair_color: 'black',
//     eye_color: 'black',
//     dob: new Date(1771, 2, 16, 7, 47),
//     loves: ['hot pockets','fresh cut grass'],
//     location: 'Cherynobyl',
//     gender: 'm',
//     victims: 99,
//     title: 'mr vampy vamp',
// }, (err, article)=>{
// 	if(err) { //if there's an error, log it
// 		console.log(err);
// 	} else { //else log the created article
// 		console.log(article);
// 	}
// });

// Vampire.create({
// 	name:'drac-oola',
//     hair_color: 'black',
//     eye_color: 'white',
//     dob: new Date(1655, 2, 16, 9, 37),
//     loves: ['darkness','hot yoga', 'sleeping'],
//     location: 'Pennsylvania, USA',
//     gender: 'm',
//     victims: 5
// }, (err, article)=>{
// 	if(err) { //if there's an error, log it
// 		console.log(err);
// 	} else { //else log the created article
// 		console.log(article);
// 	}
// });

// Vampire.create({
// 	name:'Benny Vamp',
//     hair_color: 'blonde',
//     eye_color: 'white',
//     dob: new Date(995, 6, 12, 9, 65),
//     loves: ['blood','flying',],
//     location: 'Pennsylvania, USA',
//     gender: 'm',
//     victims: 130
// }, (err, article)=>{
// 	if(err) { //if there's an error, log it
// 		console.log(err);
// 	} else { //else log the created article
// 		console.log(article);
// 	}
// });

// Vampire.create({
// 	name:'Vamp eyress',
//     hair_color: 'blonde',
//     eye_color: 'blue',
//     dob: new Date(1915, 6, 12, 9, 65),
//     loves: ['dating','cooking',],
//     location: 'Beijing, China',
//     gender: 'f',
//     victims: 45
// }, (err, article)=>{
// 	if(err) { //if there's an error, log it
// 		console.log(err);
// 	} else { //else log the created article
// 		console.log(article);
// 	}
// });

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females

// Vampire.find(
//     {gender: 'f'},
//     (err, Vampire)=>{
// 		console.log(Vampire); // an array of articles
// 	}
// );

// have greater than 500 victims
// Vampire.find(
//         {victims: {$gt: 500}},
//         (err, Vampire)=>{
//     		console.log(Vampire); // an array of articles
//     	}
//     );


// have fewer than or equal to 150 victims
// Vampire.find(
//         {victims: {$lte: 150}},
//         (err, Vampire)=>{
//             console.log(Vampire); // an array of articles
//         }
//     );
    
// have a victim count is not equal to 210234

// Vampire.find(
//         {victims: {$ne: 210234}},
//         (err, Vampire)=>{
//     		console.log(Vampire); // an array of articles
//     	}
//     );
    
// have greater than 150 AND fewer than 500 victims

// Vampire.find(
//         {victims: {$gt: 150, $lte: 500}},
//         (err, Vampire)=>{
//             console.log(Vampire); // an array of articles
//         }
//     );

/////////////////////////////////////////////////
// ### Select by exists or does not exist

//have a title property

// Vampire.find(
// 	{title: {$exists: true}},
// 	(err, Vampire)=>{
// 		console.log(Vampire); // an array of articles
// 	}
// );

// do not have a victims property

// Vampire.find(
// 	{victims: {$exists: false}},
// 	(err, Vampire)=>{
// 		console.log(Vampire); // an array of articles
// 	}
// );

// have a title AND no victims

// Vampire.find({
//     title: {$exists: true}, 
//     victims:{$exists: false}
// },(err, Vampire)=>{
// 		console.log(Vampire); // an array of articles
// 	}
// );

//WE ARE HERE
// have victims AND the victims they have are greater than 1000
// Vampire.find({
//     victims: {$exists: true, $gt: 1000},
// }, (err, Vampire) => {
//     console.log(Vampire);
// }
// );
/////////////////////////////////////////////////
// ### Select with OR
// are from New York, New York, US or New Orleans, Louisiana, US

Vampire.find({ 
$or: [
    {location: 'New York, New York, US' 
},  
    {location:  'New Orleans, Louisiana, US'} ] 
},(err, Vampire) => {
    console.log(Vampire);
});

// love brooding or being tragic
Vampire.find({ 
    $or: [
        {loves: 'brooding' 
    },  
        {loves:  'being tragic'} ] 
    },(err, Vampire) => {
        console.log(Vampire);
    });

// have more than 1000 victims or love marshmallows
Vampire.find({ 
    $or: [
        {loves: 'marshmallows' 
    },  
        {victims: {$lte: 1000}} ] 
    },(err, Vampire) => {
        console.log(Vampire);
    });

// have red hair or green eyes
Vampire.find({ 
    $or: [
        {hair_color: 'red' 
    },  
        {eye_color:  'green'} ] 
    },(err, Vampire) => {
        console.log(Vampire);
    });

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
