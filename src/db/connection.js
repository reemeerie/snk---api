const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://thomasReemeerie:yerbamate41@thesneakersstore.7n0a7ep.mongodb.net/snk-api?retryWrites=true&w=majority'

mongoose.connect(connectionString)
  .then(() => {
    console.log('Database connected')
  }).catch(err => {
    console.error(err)
  })

module.exports
