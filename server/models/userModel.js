const mongoose = require('mongoose')

const userModel = mongoose.model(
    'User',
    new mongoose.Schema({
        name:String,
        email:String,
        password:String,
        profilePic:Buffer
    })
)

module.exports = userModel