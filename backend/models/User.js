const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    password_hash: {type: String},
    role: {type: String, // Admin or User
        enum: ["admin", "user"],    
        default: "user"}, 
    status: {type: String, 
        enum: ["active", "inactive", "banned"],
        default: "active"
    },
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);