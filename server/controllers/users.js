const mongoose = require('mongoose');
const { User } = require('../models/User');
const _ = require('lodash');
//---------------find or create ------------------------
var findOrCreate = async (profile) => {
    const user = await User.findOne({ social_id: profile.id });
    if (_.isNull(user)) {
        let user = new User({
            name: profile.displayName,
            social_id: profile.id,
            image: profile.photos[0].value || null,
            gender: profile.gender,
            email: profile.emails[0].value || null,
            provider: profile.provider
        });
        await user.save();
        return user;
    }
    return user;
};
//-------------------- send appointment request -----------
var sendRequest = async (id, user) => {
    const resever = await User.findById(id);
    resever.coming_reqquest = [{ requester: user._id, sent_at: Date.now(),name:user.name ,image: user.image }];
    await resever.save();
    user.sent_request = [{ receiver: id, sent_at: Date.now(),name:resever.name ,image: resever.image }];
    const res = await user.save();
    return res;
}
//--------------------- cancel  sent request ---------------------
var cancelRequest = async (id, user) => {
    await User.findByIdAndUpdate(id, { $pull: { coming_reqquest: { requester: user._id } } });
    const res = await User.findByIdAndUpdate(user._id, { $pull: { sent_request: { receiver: id } } });
    return res;
}
//--------------------------- reject  coming req --------------------
var rejectRequest = async (id, user) => {
    await User.findByIdAndUpdate(id, { $pull: { sent_request: { receiver: user._id } } });
    const res = await User.findByIdAndUpdate(user._id, { $pull: { coming_reqquest: { requester: id } } });
    return res;
}
//--------------------- fetch users list ------------------------
var usersList = async (user)=>{
    var allusers = await User.find({ _id: { $nin: user._id } });
   // var users = await allusers.filter(x=> x._id !==user._id);
    return allusers;
}
// ------------------------ create appotment ----------------
var createAppointment = async (id,user)=>{
   const x = await User.findByIdAndUpdate(id, { $pull: { sent_request: { receiver: user._id } } });
   x.appointments=[{with:user._id,name:user.name,image:user.image,date:Date.now()}];
   await x.save();
   await User.findByIdAndUpdate(user._id, { $pull: { coming_reqquest: { requester: id } } });
   user.appointments=[{with:x._id,name:x.name,image:x.image,date:Date.now()}];
   const res = await user.save();
   return res;
}
var cancelAppointment = async (id,user)=>{
    await User.findByIdAndUpdate(id, { $pull: { appointments: { with: user._id } } });
    const res = await User.findByIdAndUpdate(user._id, { $pull: { appointments: { with: id } } });
    return res;
}
module.exports = { findOrCreate, sendRequest, cancelRequest , rejectRequest , usersList , createAppointment , cancelAppointment};