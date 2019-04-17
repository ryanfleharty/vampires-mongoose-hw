const mongoose = require('mongoose');
// const populateVampires = require('./populateVampires')

const vampireSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    hair_color: {
        type: String,
        default: 'blonde'
        },
    eye_color: String,
    dob: Date,
    loves: [String],
    location: String,
    gender: String,
    victims: {
        type: Number,
        min: 0
        }   
  });

  const vampire = mongoose.model('vampire', vampireSchema);

  module.exports = vampire;