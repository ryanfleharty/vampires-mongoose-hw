//define schema here
const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({
    //write your schema fields here
    name: {type: String, required: true, unique: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String},
    dob: {type: Date},
    loves: [{type: String}],
    location: {type: String},
    gender: {type: String},
    victims: {type: Number, required: true, min:0},
    title: {type: String, required: false},
  });
  

  
  //here where we are instantiating or Model
  //creates in mongodb an 'articles' collection, and says 
  //all the documents that you put in it should look like the
  //schema defined above
  const Vampire = mongoose.model('Vampire', vampireSchema);
  
  //Article has ability to perform all CRUD actions
  //Create something, read something, update something,
  //delete something
  module.exports = Vampire;
  

  