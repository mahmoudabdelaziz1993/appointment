var mongoose = require('mongoose');
const{sentreqSchema}=require('./SentRequests');
const{comingreqSchema}=require("./ComingRequests");
const {appointmentSchema}= require("./Appointment")
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: { type: String },
    image: { type: String },
    social_id: String,
    provider: String,
    password: { type: String, default: null },
    email: { type: String, default: null },
    coming_reqquest:[comingreqSchema],
    sent_request:[sentreqSchema],
    appointments:[appointmentSchema]
});

const User = mongoose.model('users', schema);

module.exports = { User };