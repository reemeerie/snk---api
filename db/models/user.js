const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    id: Number,
    nombre: String,
    apellido: String,
    password: String,
    repeatedPassword: String,
    email: String,
    admin: Boolean,
    /* hago referencia a un documento del modelo Order, algo asi como una FK conceptual */
    ordersId: [
      {
        type: Number,
        ref: "Order",
      },
    ],
  },
  { collection: "users" }
);

/* elimino el versionado interno de mongoose __v al pasarlo a JSON y las contraseñas obviamente */
userSchema.set('toJSON', {
  transform: (document, returnedDocument) => {
    delete returnedDocument.__v
    delete returnedDocument.password
    delete returnedDocument.repeatedPassword
  }
})

const User = model('User', userSchema)

module.exports = {
  User
}
