const mongoose = require('mongoose');

const schema = mongoose.Schema;

const studentRegister = new schema({
    Name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, rollno: {
        type: String,
        required: true
    }, branch: {
        type: String,
        required: true
    },
})

const register = mongoose.model('register',studentRegister)

module.exports = register;