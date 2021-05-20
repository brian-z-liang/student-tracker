const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
	name: { type: String, required: true},
	bank: { type: Number, default: 0 }
})

module.exports = mongoose.model('student', student)