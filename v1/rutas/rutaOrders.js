const express = require('express')
const router = express.Router()
const controladorOrders = require('../../controladores/controladorOrders')
const isAuthenticated = require('../../middlewares/authMiddleware')

router.get('/', isAuthenticated, controladorOrders.getAllOrders)

router.get('/:id', isAuthenticated, controladorOrders.getUnaOrder)

router.post('/', controladorOrders.creoUnaOrder)

router.patch('/:id', isAuthenticated, controladorOrders.editoUnaOrder)

router.delete('/:id', controladorOrders.borroUnaOrder)

module.exports = router
