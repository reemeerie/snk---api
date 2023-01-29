const ormOrders = require('../db/ormOrders')

const getAllOrders = async () => {
  const allOrders = await ormOrders.getAllOrders()
  return allOrders
}

const getUnaOrder = async (id) => {
  const order = await ormOrders.getUnaOrder(id)
  return order
}

const creoUnaOrder = async (nuevoOrder) => {
  const orderCreado = await ormOrders.creoUnaOrder(nuevoOrder)
  return orderCreado
}

const editoUnaOrder = async (id, changes) => {
  const orderEditado = await ormOrders.editoUnaOrder(id, changes)
  return orderEditado
}

const borroUnaOrder = async (id) => {
  const orderBorrado = await ormOrders.borroUnaOrder(id)
  return orderBorrado
}

module.exports = {
  getAllOrders,
  getUnaOrder,
  creoUnaOrder,
  editoUnaOrder,
  borroUnaOrder
}
