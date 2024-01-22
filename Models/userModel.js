// userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure uniqueness of email addresses
    },
    // Add other fields as needed
});

 module.exports = mongoose.model('User', userSchema);