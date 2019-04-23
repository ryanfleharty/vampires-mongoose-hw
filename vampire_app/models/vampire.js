const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema ({
   name: {type: String, required: true},
   hair_color: {type: String, default: 'blonde'},
   eye_color: String,
   dob: Date,
   loves: [{type: String}],
   location: String,
   gender: String,
   victims: {type: Number, min: 0},

});

const vampire = mongoose.model('vampire', vampireSchema);

module.exports = vampire; 