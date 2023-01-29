const bcrypt = require('bcrypt')
const { User } = require('../db/models/user.js')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  require('../db/connection.js')

  const { emailIngresado, passwordIngresada } = req.body

  const usuario = await User.findOne({ email: emailIngresado })

  const passwordCorrect = usuario === null
    ? false
    : await bcrypt.compare(passwordIngresada, usuario.password)

  if (!passwordCorrect) {
    return res.status(401).json({
      error: 'invalid user or password'
    })
  }

  const userForToken = {
    id: usuario.id,
    email: usuario.email,
    admin: usuario.admin
  }

  const token = jwt.sign(userForToken, process.env.SECRET)

  return res.status(200).send({
    id: usuario.id,
    name: usuario.nombre,
    apellido: usuario.apellido,
    token
  })
}

module.exports = { login }
