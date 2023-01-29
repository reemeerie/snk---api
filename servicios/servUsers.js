const ormUsers = require('../db/ormUsers')

const getAllUsers = async () => {
  const allUsers = await ormUsers.getAllUsers()
  return allUsers
}

const getUnUser = async (id) => {
  const user = await ormUsers.getUnUser(id)
  return user
}

const creoUnUser = async (nuevoUser) => {
  const userCreado = await ormUsers.crearUser(nuevoUser)
  return userCreado
}

const editoUnUser = async (id, changes) => {
  const userEditado = await ormUsers.editoUnUser(id, changes)
  return userEditado
}

const borroUnUser = async (id) => {
  const userBorrado = await ormUsers.borroUnUser(id)
  return userBorrado
}

module.exports = {
  getAllUsers,
  getUnUser,
  creoUnUser,
  editoUnUser,
  borroUnUser
}
