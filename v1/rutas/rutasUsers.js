const express = require('express')
const router = express.Router()
const controladorUsers = require('../../controladores/controladorUsers')
const isAuthenticated = require('../../middlewares/authMiddleware')

router.get('/', isAuthenticated, controladorUsers.getAllUsers)

router.get('/:id', isAuthenticated, controladorUsers.getUnUser)

router.post('/', controladorUsers.creoUnUser)

router.patch('/:id', isAuthenticated, controladorUsers.editoUnUser)

router.delete('/:id', controladorUsers.borroUnUser)

module.exports = router
