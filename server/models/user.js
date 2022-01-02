const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = {
    email : {
        type: String, 
        required: true
    }, 
    password: { 
        type: String, 
        required: true 
    }, 
    username: {
        type: String, 
        required: true 
    }, 
    profileImg : {
        type: String
    }
};
const user = mongoose.model('User', userSchema);
module.exports = user;