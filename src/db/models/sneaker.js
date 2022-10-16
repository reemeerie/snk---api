const {Schema, model} = require('mongoose')

const sneakerSchema = new Schema({
    id: Number,
    nombre: String,
    marca: String,
    img: String,
    precio: String,
    Stock: String
})

const Sneaker = model('Sneaker', sneakerSchema)

module.exports = {
    Sneaker
}