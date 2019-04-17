const mongoose = require('mongoose')

const vampireSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    unique: true
  },
  hair_color: String,
  eye_color: String,
  dob: Date,
  loves: [String],
  location: String,
  gender: String,
  victims: Number,
})

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;
