const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Username:String,
    EmailId:String,
    DateOfBirth:String,
    Role:String,
    Location:String,
    Password:String
})

const UserModel = mongoose.model('User',userSchema);

module.exports = {UserModel}