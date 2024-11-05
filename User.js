const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String,
});

module.export = mongoose.model('User', userSchema);