var mongoose = require('mongoose');
const { Schema } = mongoose;
const comingreqSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: "User" },
    responded: { type: Boolean, default: false },
    sent_at: Date,
    name: {
        type: String,
        required: true
    },
    image: { type: String }
});
module.exports = { comingreqSchema };