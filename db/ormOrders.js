const { Order } = require('./models/order.js')

const getAllOrders = async () => {
  require('./connection.js')

  const orders = await Order.find({})

  return orders
}

const creoUnaOrder = async (orderNueva) => {
  require('./connection.js')

  const orderExiste = await Order.find({ id: orderNueva.id })

  if (orderExiste.length > 0) {
    console.log('Ya existe la orden')
    return { warning: 'Orden con ID existente' }
  }

  const orderCreada = new Order({
    id: orderNueva.id,
    buyer: {
      nombre: orderNueva.buyer.nombre,
      apellido: orderNueva.buyer.apellido,
      dni: orderNueva.buyer.dni,
      provincia: orderNueva.buyer.provincia,
      ciudad: orderNueva.buyer.ciudad,
      direccion: orderNueva.buyer.direccion,
      codigoPostal: orderNueva.buyer.codigoPostal,
      telefono: orderNueva.buyer.telefono
    },
    userID: orderNueva.userId,
    items: orderNueva.items,
    total: orderNueva.total
  })

  const ordenCreada = await orderCreada.save()

  return ordenCreada
}

const getUnaOrder = async (orderId) => {
  require('./connection.js')

  const order = await Order.find({ id: orderId })

  return order
}

const editoUnaOrder = async (orderId, changes) => {
  require('./connection.js')

  const newOrder = { new: true }

  const order = await Order.findOneAndUpdate({ id: orderId }, changes, newOrder)

  if (order === null) {
    console.log('No existe esa order')
    return 'No existe esa order'
  } else {
    return order
  }
}

const borroUnaOrder = async (orderId) => {
  require('./connection.js')

  const order = await Order.find({ id: orderId }).deleteOne()

  if (order.deletedCount > 0) {
    console.log('Order borrada')
    return { ...order, info: `Order con id ${orderId} borrada` }
  } else {
    console.log('No existe esa order')
    return 'No existe esa order'
  }
}

module.exports = {
  getAllOrders,
  creoUnaOrder,
  getUnaOrder,
  editoUnaOrder,
  borroUnaOrder
}
