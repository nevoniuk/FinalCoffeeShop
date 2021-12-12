const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const userSchema = new Schema({
    name: { type: String, unique: false, required: true},
    username: { type: String, unique: true, required: true},
    email: { type: String, unique: true, required: true},
    password: { type: String, unique: false, required: true},
}, { collection: "User"})

const User = mongoose.model('User', userSchema)
module.exports = User