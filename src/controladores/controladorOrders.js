const servOrders = require('../servicios/servOrders')
const jwt = require('jsonwebtoken')

const getAllOrders = async (req, res) => {
  try {
    const allOrdenes = await servOrders.getAllOrders()
    return res.json({ status: 'OK', data: allOrdenes })
  } catch (error) {
    console.error(error)
  }
}

const getUnaOrder = async (req, res) => {
  const { params: { id } } = req
  const newOrderId = Number(id)
  if (isNaN(newOrderId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }
  const orden = await servOrders.getUnaOrder(newOrderId)
  res.send({ status: 'OK', data: orden })
}

const creoUnaOrder = async (req, res) => {
  const request = req.body

  const authorization = req.get('authorization')

  let token = null

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decodedToken = null

  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (e) {
    console.log('Esta mal el token - jwt: invalid signature')
  }

  if (decodedToken == null) {
    res.status(401).send({ error: 'Token missing or invalid' })
    return
  }

  const userId = decodedToken.id

  if (!request.buyer.nombre || !request.buyer.apellido || !request.buyer.dni || !request.buyer.provincia || !request.buyer.ciudad || !request.buyer.direccion || !request.buyer.codigoPostal || !request.buyer.telefono || !request.items || !request.total) {
    res.status(404).send({ warning: 'Faltan campos obligatorios' })
    return
  }
  const orderId = Math.floor(Math.random() * 100000000)

  const nuevaOrden = {
    id: orderId,
    buyer: {
      nombre: request.buyer.nombre,
      apellido: request.buyer.apellido,
      dni: request.buyer.dni,
      provincia: request.buyer.provincia,
      ciudad: request.buyer.ciudad,
      direccion: request.buyer.direccion,
      codigoPostal: request.buyer.codigoPostal,
      telefono: request.buyer.telefono
    },
    userId,
    items: request.items,
    total: request.total
  }
  console.log('ordenNueva', nuevaOrden)
  const ordenCreada = await servOrders.creoUnaOrder(nuevaOrden)
  res.status(201).send({ status: 'OK', data: ordenCreada })
}

const editoUnaOrder = async (req, res) => {
  const changes = req.body
  const orderId = req.params.id

  const newOrderId = Number(orderId)

  if (isNaN(newOrderId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }
  const orderEditada = await servOrders.editoUnaOrder(newOrderId, changes)
  res.send({ status: 'OK', data: orderEditada })
}

const borroUnaOrder = async (req, res) => {
  const orderId = req.params.id

  const newOrderId = Number(orderId)

  if (isNaN(newOrderId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }

  const orderBorrada = await servOrders.borroUnaOrder(newOrderId)
  res.status(410).send({ status: 'OK', data: orderBorrada })
}

module.exports = {
  getAllOrders,
  getUnaOrder,
  creoUnaOrder,
  editoUnaOrder,
  borroUnaOrder
}
