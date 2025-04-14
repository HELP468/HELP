const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}],
    status: {type: String,
        enum: ["open", "closed", "in-progress"],
        default: "open"
    },
    subject: {type: String, required: true},
    description: {type: String, required: true},
    priority: {type: String,
        enum: ["low", "medium", "high"],
        required: true
    },
    messages: [{type: mongoose.Schema.Types.ObjectId, ref: 'Message'}],
    resolved_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null}
}, {timestamps: true});

module.exports = mongoose.model('Ticket', ticketSchema);