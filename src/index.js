const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 4500
const zapatillasRouterV1 = require('./v1/rutas/rutasZapatillas')

app.use(cors())
app.use(express.json())
app.use('/public', express.static('src/public'))
app.use('/api/v1/zapatillas', zapatillasRouterV1)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
