const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  id: Number,
  nombre: String,
  apellido: String,
  password: String,
  repeatedPassword: String,
  email: String,
  buysId: [{
    type: Number,
    ref: 'Buy'
  }]
}, { collection: 'users' })

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
