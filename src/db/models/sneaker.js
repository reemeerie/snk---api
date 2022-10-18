const { Schema, model } = require('mongoose')

const sneakerSchema = new Schema({
  id: Number,
  nombre: String,
  marca: String,
  img: String,
  precio: String,
  stock: String
}, { collection: 'sneakers' })

const Sneaker = model('Sneaker', sneakerSchema)

module.exports = {
  Sneaker
}
