const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema(
{
	//The schema for the vampires

	name: {type: String, required: true},
	hair_color: {type: String, default: 'blonde'},
	eye_color: {type: String},
	dob: {type: Date},
	loves: [String],
	location: {type: String},
	gender: {type: String},
	victims: {type: Number, min: [0, 'Cannot have negative number of victims']},
});

const Vampire = mongoose.model('Vampire', vampireSchema);

module.exports = Vampire;