var mongoose = require('mongoose');
const { Schema } = mongoose;
const sentreqSchema = new Schema({
    receiver: { type: Schema.Types.ObjectId, ref: "User" },
    responded: { type: Boolean, default: false },
    sent_at: Date,
    name: {
        type: String,
        required: true
    },
    image: { type: String }
});
module.exports = { sentreqSchema };