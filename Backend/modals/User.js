const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    collegeName: String,
    universityName: String,
    groupName: String,
    contactNo : Number,
    groupMembers : Number,
    events: [String],
    totalAmount : Number,
    idPhoto: String,

})

 const userModel = mongoose.model("users",userSchema)
 module.exports = userModel