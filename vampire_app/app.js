
// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/Vampire');
require('./populateVampires');

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vampires';

// 4. Open your mongoose connection
mongoose.connect(connectionString, {useNewUrlParser: true, useCreateIndex: true});

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
const vamps = require('./populateVampires');

// Vampire.collection.insertMany(vamps,(err, vamps) => {
//   console.log("added provided vampire data")
//   mongoose.connection.close();
// });


// ### Add some new vampire data
// Vampire.create([
//   {
//    name: 'Veda',
//    hair_color: 'black'
//  }, (err, Vampire) => {
//   if(err){
//        console.log(err)
//   } else {
//       console.log(Vampire)
//     }
// },
// {
//     name: 'Kristen Stewart',
//     hair_color: 'black'
// }, (err, Vampire) => {
//     if(err){
//          console.log(err)
//     } else {
//         console.log(Vampire)
//       }
//   },
// {
//     name: 'Matt',
//     hair_color: 'brown'
// }, (err, Vampire) => {
//     if(err){
//          console.log(err)
//     } else {
//         console.log(Vampire)
//       }
//   },
// {
//     name: 'Adam',
//     hair_color: 'black'
// }, (err, Vampire) => {
//     if(err){
//          console.log(err)
//     } else {
//         console.log(Vampire)
//       }
//   },
// ]);

/////////////////////////////////////////////////
// ## QUERYING
// Vampire.find({gender: 'f'}, (err, Vampire) => {
//     if(err){
//          console.log(err)
//     } else {
//         console.log(Vampire)
//       }
//   }
// );

// Vampire.find({victims: {$gt: 500}}, (err, Vampire) => {
//     if(err){
//       console.log(err)
//  } else {
//      console.log(Vampire)
//    }
// }
// );

// Vampire.find({victims: {$lte: 150}}, (err, Vampire) => {
//     if(err){
//       console.log(err)
//  } else {
//      console.log(Vampire)
//    }
// }
// );



/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// Vampire.find({victims: {$ne: 210234}}, (err, Vampire) => {
//     if(err){
//       console.log(err)
//  } else {
//      console.log(Vampire)
//    }
// }
// );

// Vampire.find({victims: {$gt: 150, $lt: 500}}, (err, Vampire) => {
//     if(err){
//       console.log(err)
//  } else {
//      console.log(Vampire)
//    }
// }
// );

// Vampire.find({title: {$exists: true}}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

// Vampire.find({victims: {$exists: false}}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

// Vampire.find(
//   {title: {$exists: true}, victims: {$exists: false}}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

// Vampire.find(
//   {victims: {$exists: true, $gt: 1000}}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find(
//   {$or: [
//     {location: 'New York, New York, US'}, 
//     {location: 'New Orleans, Louisiana, US'}
//   ]}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

// Vampire.find(
//   {$or: [
//     {loves: 'brooding'}, 
//     {loves: 'being tragic'}
//   ]}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );

// Vampire.find(
//   {$or: [
//     {victims: {$gt: 1000}},
//     {loves: 'marshmallows'}
//   ]}, (err, Vampire) => {
//   if(err){
//     console.log(err)
// } else {
//    console.log(Vampire)
//  }
// }
// );


Vampire.find(
  {$or: [
    {hair_color: 'red'},
    {eye_color: 'green'}
  ]}, (err, Vampire) => {
  if(err){
    console.log(err)
} else {
   console.log(Vampire)
 }
}
);

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
