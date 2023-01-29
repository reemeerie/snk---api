const ormZapatillas = require('../db/ormZapatillas')

const getAllZapas = async () => {
  const allZapatillas = await ormZapatillas.getAllZapatillas()
  return allZapatillas
}

const getUnaZapa = async (id) => {
  const zapa = await ormZapatillas.getUnaZapa(id)
  return zapa
}

const creoUnaZapa = async (nuevaZapa) => {
  const zapaCreada = await ormZapatillas.crearZapatilla(nuevaZapa)
  return zapaCreada
}

const editoUnaZapa = async (id, changes) => {
  const zapaEditada = await ormZapatillas.editoUnaZapa(id, changes)
  return zapaEditada
}

const borroUnaZapa = async (id) => {
  const zapaBorrada = await ormZapatillas.borroUnaZapa(id)
  return zapaBorrada
}

module.exports = {
  getAllZapas,
  getUnaZapa,
  creoUnaZapa,
  editoUnaZapa,
  borroUnaZapa
}
