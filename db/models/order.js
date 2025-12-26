const { Schema, model } = require('mongoose')

const orderSchema = new Schema(
  {
    id: Number,
    buyer: {
      nombre: String,
      apellido: String,
      dni: String,
      provincia: String,
      ciudad: String,
      direccion: String,
      codigoPostal: String,
      telefono: String,
    },
    items: Array,
    /* hago referencia a un documento del modelo User, algo asi como una FK conceptual */
    userID: {
      type: Number,
      ref: "User",
    },
    total: Number,
  },
  { collection: "orders" }
);

/* elimino el versionado interno de mongoose __v al pasarlo a JSON */
orderSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    delete returnedDocument.__v
  }
})

/* creo el modelo final manipulado por el backend */
const Order = model('Order', orderSchema)

module.exports = {
  Order
}
