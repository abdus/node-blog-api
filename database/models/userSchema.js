const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user_schema = new Schema({
    isApproved: {type: Boolean, required: true, default: false},
    name: { type: String, required: true },
    displayName: { type: String },
    Website: { type: String },
    admin: Boolean,
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
}, {autoIndex: false});

module.exports = mongoose.model('users', user_schema);