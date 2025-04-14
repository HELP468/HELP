const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    content: {type: String},
    status: {type: String,
        enum: ["sent", "delivered", "read"],
        default: "sent"
    }
},{timestamps: true})