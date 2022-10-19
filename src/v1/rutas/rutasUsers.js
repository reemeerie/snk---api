const express = require('express')
const router = express.Router()
const controladorUsers = require('../../controladores/controladorUsers')

router.get('/', controladorUsers.getAllUsers)

router.get('/:id', controladorUsers.getUnUser)

router.post('/', controladorUsers.creoUnUser)

router.patch('/:id', controladorUsers.editoUnUser)

router.delete('/:id', controladorUsers.borroUnUser)

module.exports = router
