const { Schema, model } = require('mongoose')

const orderSchema = new Schema({
  id: Number,
  buyer: {
    nombre: String,
    apellido: String,
    dni: String,
    provincia: String,
    ciudad: String,
    direccion: String,
    codigoPostal: String,
    telefono: String
  },
  items: Array,
  userID: {
    type: Number,
    ref: 'User'
  },
  total: Number
}, { collection: 'orders' })

orderSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    delete returnedDocument.__v
  }
})

const Order = model('Order', orderSchema)

module.exports = {
  Order
}
