const { Schema, model } = require('mongoose')

/* Defino el schema de MongoDB */
const sneakerSchema = new Schema({
  id: Number,
  nombre: String,
  marca: String,
  img: String,
  precio: String,
  stock: String
  /* Indico la colección aunque mongoose pluraliza solo */
}, { collection: 'sneakers' })

/* elimino el versionado interno de mongoose __v al pasarlo a JSON */
sneakerSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    delete returnedDocument.__v
  }
})

/* creo el modelo final manipulado por el backend */
const Sneaker = model('Sneaker', sneakerSchema)

module.exports = {
  Sneaker
}
