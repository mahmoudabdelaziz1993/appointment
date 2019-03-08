const mongoose = require('mongoose');
const { Appointment } = require('../models/Appointment');
const _ = require('lodash');

//-------------------- create a Appointment ----------
var createAppointment = async (id, { date, notes }, user) => {
    var appointment = new Appointment({
        doctor: id,
        paitant: user._id,
        notes,
        date
    });
    const res = await appointment.save();
    return res;
};
//------------------------ list all appointments --------------
var listAppoinment = async (user) => {
    const res = await Appointment.find({ $or: [{ doctor: id }, { paitant: id }] });
    return res;
}
//---------------------------- cancel Appointment -----------------
var cancelAppoinment = async (id) => {
    const res = await Appointment.findByIdAndDelete(id)
    return res;
}

module.exports = { listAppoinment, cancelAppoinment, createAppointment }