const mongoose = require('mongoose')

const AnimalSchema = new mongoose.Schema({
  name: String
}, {
  discriminatorKey: '__animalType'
})

const Animal = mongoose.model('Animal', AnimalSchema)

const DogSchema = new mongoose.Schema({
  woofPower: Number
})
const CatSchema = new mongoose.Schema({
  meowPower: Number
})
const Dog = Animal.discriminator('Dog', DogSchema)
const Cat = Animal.discriminator('Cat', CatSchema)

module.exports = { Animal, Cat, Dog }
