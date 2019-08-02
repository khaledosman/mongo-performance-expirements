const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  details: mongoose.Schema.Types.Mixed,
  birthDate: Date
})

const User = mongoose.model('User', UserSchema)

const IndexedUser = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  details: mongoose.Schema.Types.Mixed,
  birthDate: Date
})

IndexedUser.index({ age: -1 })
const UserWithIndex = mongoose.model('UserWithIndex', IndexedUser)
module.exports = { User, UserWithIndex }
