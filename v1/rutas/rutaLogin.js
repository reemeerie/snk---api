const express = require('express')
const router = express.Router()
const controladorLogin = require('../../controladores/controladorLogin')

router.post('/', controladorLogin.login)

module.exports = router
