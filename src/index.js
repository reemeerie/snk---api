require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const zapatillasRouterV1 = require('./v1/rutas/rutasZapatillas')
const usersRouterV1 = require('./v1/rutas/rutasUsers')

app.use(cors())
app.use(express.json())
app.use('/public', express.static('src/public'))
app.use('/api/v1/zapatillas', zapatillasRouterV1)
app.use('/api/v1/users', usersRouterV1)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
