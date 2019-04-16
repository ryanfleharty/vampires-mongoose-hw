// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const vampire = require('./models/vampire');
const vampsData = require('./models/populateVampires');

// 3. Connect your database and collection name
// the end of the string names your db in mongdodb for you
const connectionString = 'mongodb://localhost/vampires';

// 4. Open your mongoose connection
// this creates the connection
mongoose.connect(connectionString, { useNewUrlParser: true, useCreateIndex: true });

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connect to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to ${connectionString}`);
});

mongoose.connection.on('error', () => {
  console.log(`Mongoose err: ${err}`);
});

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
vampsData.forEach((vamp) => {
  vampire.create({
    name: vamp.name,
    hair_color: vamp.hair_color,
    eye_color: vamp.eye_color,
    dob: vamp.dob,
    loves: vamp.loves,
    location: vamp.location,
    gender: vamp.gender,
    victims: vamp.victims,
  }, (err, createdVampire) => {
    // This is the callback function
    // this is the response from mongodb
    if (err) {
      console.log(err);
    } else {
      console.log(createdVampire);
    }
  });
});
// ### Add some new vampire data

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
