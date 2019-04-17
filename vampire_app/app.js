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

// vampire.collection.insertMany(vampires,(err, data) => {
//     console.log("added provided vampire data")
//     mongoose.connection.close();
//   });

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

//1. db.vampires.find({gender: 'f'}).pretty();
//2. db.vampires.find({victims: {$gt: 500}}).pretty();
//3. db.vampires.find({victims: {$lte: 150}}).pretty();
//4. db.vampires.find({victims: {$ne: 210234}}).pretty();
//5. db.vampires.find({victims: {$gt: 150, $lt: 500}}).pretty()


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
