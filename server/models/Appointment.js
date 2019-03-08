var mongoose = require('mongoose');
const { Schema } = mongoose;
const appointmentSchema = new Schema({
    doctor: { type: Schema.Types.ObjectId, ref: "User" },
    paitant: { type: Schema.Types.ObjectId, ref: "User" },
    notes:String,
    date: Date
});
const Appointment = mongoose.model('appointments', appointmentSchema);
module.exports = { Appointment };