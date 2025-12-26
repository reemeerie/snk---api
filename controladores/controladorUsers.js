const servUsers = require('../servicios/servUsers')

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await servUsers.getAllUsers()
    return res.json({ status: 'OK', data: allUsers })
  } catch (error) {
    console.error(error)
  }
}

const getUnUser = async (req, res) => {
  const { params: { id } } = req
  const newUserId = Number(id)
  if (isNaN(newUserId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }
  /* falta try catch en todos lados */
  const user = await servUsers.getUnUser(id)
  res.send({ status: 'OK', data: user })
}

const creoUnUser = async (req, res) => {
  const request = req.body

  if (!request.id || !request.nombre || !request.apellido || !request.password || !request.repeatedPassword || !request.email) {
    res.status(404).send({ warning: 'Faltan campos obligatorios' })
    return
  }
  if (request.password !== request.repeatedPassword) {
    res.status(404).send({ warning: 'Passwords dont match' })
    return
  }
  const nuevoUser = {
    id: request.id,
    nombre: request.nombre,
    apellido: request.apellido,
    password: request.password,
    repeatedPassword: request.repeatedPassword,
    email: request.email,
    ordersId: []
  }
  const userCreado = await servUsers.creoUnUser(nuevoUser)
  res.status(201).send({ status: 'OK', data: userCreado })
}

const editoUnUser = async (req, res) => {
  const changes = req.body
  const userId = req.params.id

  const newUserId = Number(userId)

  if (isNaN(newUserId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }

  const userEditado = await servUsers.editoUnUser(newUserId, changes)
  res.send({ status: 'OK', data: userEditado })
}

const borroUnUser = async (req, res) => {
  const userId = req.params.id

  const newUserId = Number(userId)

  if (isNaN(newUserId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }

  const userBorrado = await servUsers.borroUnUser(newUserId)
  res.status(410).send({ status: 'OK', data: userBorrado })
}

module.exports = {
  getAllUsers,
  getUnUser,
  creoUnUser,
  editoUnUser,
  borroUnUser
}
