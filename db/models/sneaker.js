const { Schema, model } = require('mongoose')

const sneakerSchema = new Schema({
  id: Number,
  nombre: String,
  marca: String,
  img: String,
  precio: String,
  stock: String
}, { collection: 'sneakers' })

sneakerSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    delete returnedDocument.__v
  }
})

const Sneaker = model('Sneaker', sneakerSchema)

module.exports = {
  Sneaker
}
