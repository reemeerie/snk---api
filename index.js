require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8030
const zapatillasRouterV1 = require('./v1/rutas/rutasZapatillas')
const usersRouterV1 = require('./v1/rutas/rutasUsers')
const loginRouterV1 = require('./v1/rutas/rutaLogin')
const ordersRouterv1 = require('./v1/rutas/rutaOrders')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    message: 'working v2'
  })
})
// app.use('/public', express.static('src/public'))
app.use('/api/v1/zapatillas', zapatillasRouterV1)
app.use('/api/v1/users', usersRouterV1)
app.use('/api/v1/login', loginRouterV1)
app.use('/api/v1/orders', ordersRouterv1)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
