const { User } = require('./models/user.js')

const bcrypt = require('bcrypt')

const getAllUsers = async () => {
  require('./connection.js')

  const users = await User.find({})

  return users
}

const crearUser = async (userNuevo) => {
  require('./connection.js')

  const userExiste = await User.find({ id: userNuevo.id })

  if (userExiste.length > 0) {
    console.log('YA EXISTE EL USER BRO')
    return userExiste
  }
  const passwordHasheada = await bcrypt.hash(userNuevo.password, 10)

  const userACrear = new User({
    id: userNuevo.id,
    nombre: userNuevo.nombre,
    apellido: userNuevo.apellido,
    password: passwordHasheada,
    email: userNuevo.email,
    ordersId: userNuevo.ordersId,
    admin: false
  })

  const usuarioCreado = await userACrear.save()

  return usuarioCreado
}

const getUnUser = async (userId) => {
  require('./connection.js')

  const user = await User.find({ id: userId })

  return user
}

const editoUnUser = async (userId, changes) => {
  require('./connection.js')

  const newUser = { new: true }

  const user = await User.findOneAndUpdate({ id: userId }, changes, newUser)

  if (user === null) {
    console.log('No existe ese user')
    return 'No existe ese user'
  } else {
    return user
  }
}

const borroUnUser = async (userId) => {
  require('./connection.js')

  const user = await User.find({ id: userId }).deleteOne()

  if (user.deletedCount > 0) {
    console.log('User borrado')
    return { ...user, info: `User con id ${userId} borrado` }
  } else {
    console.log('No existe ese user')
    return 'No existe ese user'
  }
}

module.exports = {
  getAllUsers,
  crearUser,
  getUnUser,
  editoUnUser,
  borroUnUser
}
