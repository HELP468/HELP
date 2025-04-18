const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    sender_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    ticket_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true},
    content: {type: String, required: true},
    status: {type: String,
        enum: ["sent", "delivered", "read"],
        default: "sent"
    },
    type: { // text is from Users and Admins (i.e. "Hello, how can I help?"), System is from the system (i.e. [user] joined the chat)
        type: String,
        enum: ["text", "system"],
        default: "text"
    }
},{timestamps: true});

module.exports = mongoose.model('Message', messageSchema);