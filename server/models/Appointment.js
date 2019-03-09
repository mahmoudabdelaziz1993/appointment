var mongoose = require('mongoose');
const { Schema } = mongoose;
const appointmentSchema = new Schema({
    with:{ type: Schema.Types.ObjectId, ref: "User" },
    status : { type: Boolean, default: false },
    image: { type: String },
    name: {
        type: String,
        required: true
    },
    date: Date
});
module.exports = { appointmentSchema };