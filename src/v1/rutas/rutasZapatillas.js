const express = require('express')
const router = express.Router()
const controladorZapatillas = require('../../controladores/controladorZapatillas')

router.get('/', controladorZapatillas.getAllZapas)

router.get('/:id', controladorZapatillas.getUnaZapa)

router.post('/', controladorZapatillas.creoUnaZapa)

router.patch('/:id', controladorZapatillas.editoUnaZapa)

router.delete('/:id', controladorZapatillas.borroUnaZapa)

module.exports = router
