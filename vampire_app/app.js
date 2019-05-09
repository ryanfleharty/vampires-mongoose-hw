// 1. Require your node modules
const mongoose = require('mongoose')
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/Vampire')

// 3. Connect your database and collection name
const connectionString = 'mongodb://localhost/vamp'
mongoose.connect(connectionString, { useNewUrlParser: true })

//a schema is the structure/blueprint and the model is is the logic/functionality. models are within the schema.

// 4. Open your mongoose connection
const vampireData = require('./populateVampires')
Vampire.collection.insertMany(vampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// ### Add some new vampire data
// Vampire.create([
//   {
//    name:'kobe',
//    hair_color:'black',
//    eye_color:'brown',
//    gender:'m'
//   },
//    if(error){
//      console.log(error);
//    } else {
//      console.log(Vampire);
//    }
// ])
// Vampire.create([
//   {
//     name:'Jes',
//     hair_color:'blonde',
//     eye_color:'green',
//     gender: 'f'
//   },
//   if(error){
//     console.log(error);
//   } else {
//     console.log(Vampire);
//   }
// ])
// Vampire.create([
//   {
//     name:'Bridgette',
//     hair_color:'brown',
//     eye_color:'blue',
//     gender: 'f'
//   },
//   if(error){
//     console.log(error);
//   } else {
//     console.log(Vampire);
//   }
// ])
// Vampire.create([
//   {
//     name:'reinhart',
//     hair_color:'brown',
//     eye_color:'blue',
//     gender: 'm'
//   },
//   if(error){
//     console.log(error);
//   } else {
//     console.log(Vampire);
//   }
// ])
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// vampire.find({gender: 'f'}}, (error, vampire) => {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$gt: 500}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$lt: 150}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$ne: 210234}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$gt: 150, $lt: 500}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
/////////////////////////////////////////////////
// ### Select by exists or does not exist
// vampire.find({title:{$exists: true}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$exists: false}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({title:{$exists: true}, victims:{$exists:false}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
// vampire.find({victims:{$exists: true}, victims:{$gt:1000}}, (error, vampire) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampire);
//   }
// })
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
app.put('/:id', (req, res) => {
  vampire.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedVampire) => {
    updatedVampire.save((err, savedUpdatedVampire)
    })
  })
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
app.delete('/:id', (req, res) => {
  vampire.findByIdAndRemove(req.params.id, (err, deletedVampire) => {
    if(err){
      res.send(err)
     } else {
    }
  })
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
