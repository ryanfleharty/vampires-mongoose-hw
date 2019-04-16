// 1. Require your node modules
const mongoose = require('mongoose');
// 2. Require your model (and possibly your extra data source);
const vampire = require('./models/vampire');

// 3. Connect your database and collection name
const connectionString = "mongodb://localhost/vampires";
// 4. Open your mongoose connection
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true
});

// listeners for errors/connections
mongoose.connection.on('connected', ()=> {
    console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose diconnected to ${connectionString}`);
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
const vampireData = require('./populateVampires');

// vampire.collection.insertMany(vampireData,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

// ### Add some new vampire data

// vampire.create({
//     name: 'Adam',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: 1986, 
//     loves: ['blood'],
//     location: 'Denver',
//     gender: 'm',
//     victims: 1
// }, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });

// vampire.create({
//     name: 'Keith',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: 1986, 
//     loves: ['blood'],
//     location: 'Denver',
//     gender: 'm',
//     victims: 1
// }, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });

// vampire.create({
//     name: 'Kensey',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: 1986, 
//     loves: ['blood'],
//     location: 'Denver',
//     gender: 'f',
//     victims: 1
// }, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });

// vampire.create({
//     name: 'Kennedy',
//     hair_color: 'blonde',
//     eye_color: 'brown',
//     dob: 1986, 
//     loves: ['blood'],
//     location: 'Denver',
//     gender: 'f',
//     victims: 1
// }, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// find all females
// vampire.find({gender: 'f'}, (err, createdVamp) => {
//         if(err){
//             console.log(err);
//         } else {
//             console.log(createdVamp);
//         }
//     });

// find all vamps with over 500 victims
// vampire.find({victims: {$gt: '500'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// });

// find all with fewer or equal to 150 victims
// vampire.find({victims: {$lte: '150'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// find all that have a victim count is not equal to 210234
// vampire.find({victims: {$ne: '210234'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

// find all that have greater than 150 AND fewer than 500 victims
// vampire.find({victims: {$gt: '150', $lt: '500'}}, (err, createdVamp) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(createdVamp);
//     }
// }); 

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
