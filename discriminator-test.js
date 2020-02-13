const mongoose = require('mongoose')
const { Animal, Cat, Dog } = require('./database/animal')
const casual = require('casual')
function fetchDogs (numberOfItems) {
  return [...new Array(numberOfItems)].map((_, index) => ({
    name: casual.name,
    woofPower: casual.integer(0, 100)
  }))
}

(async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/perftest', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    await Animal.deleteMany({})
    const dogs = fetchDogs(2)
    console.log({ dogs })
    await new Dog({
      name: casual.name,
      woofPower: casual.integer(0, 100)
    }).save()
    // await Dog.findOneAndUpdate({ name: 'lol' }, dogs[0], { upsert: true, new: true }).lean()
    await Dog.bulkWrite(dogs.map(dog => ({
      updateOne: {
        filter: { name: dog.name },
        update: { $set: dog },
        upsert: true
      }
    })))
  } catch (err) {
    console.error(err)
  }
})()
