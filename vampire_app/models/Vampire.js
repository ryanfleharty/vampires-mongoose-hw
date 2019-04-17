// CREATE MODEL AND SCHEMA HERE
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
    //write your schema fields here
        name: {type: String, required: true, unique: true},
        hair_color: {
            type: String,
            default: "blonde"
        },
        eye_color: String,
        dob: Date,
        loves: [String],
        location: String,
        gender: String,
        victims: {
            type: Number,
            min: 1
        }
  });

  const Vampire = mongoose.model('Vampire', vampireSchema)

  

  module.exports = Vampire;