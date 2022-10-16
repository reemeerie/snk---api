const servZapatillas = require('../servicios/servZapatillas')

const getAllZapas = async (req, res) => {
  try {
    const allZapas = await servZapatillas.getAllZapas()
    return res.json({ status: 'OK', data: allZapas })
  } catch (error) {
    console.error(error)
  }
}

const getUnaZapa = (req, res) => {
  const { params: { id } } = req
  if (!id) {
    return
  }
  const zapa = servZapatillas.getUnaZapa(id)
  res.send({ status: 'OK', data: zapa })
}

const creoUnaZapa = async (req, res) => {
  const request = req.body
  if (!request.id || !request.nombre || !request.marca || !request.img || !request.precio || !request.stock) {
    return
  }

  const nuevaZapa = {
    id: request.id,
    nombre: request.nombre,
    marca: request.marca,
    img: request.img,
    precio: request.precio,
    stock: request.stock
  }

  const zapaCreada = await servZapatillas.creoUnaZapa(nuevaZapa)
  res.status(201).send({ status: 'OK', data: zapaCreada })
}

const editoUnaZapa = (req, res) => {
  const { body, params: { id } } = req
  if (!id) {
    return
  }
  const zapaEditada = servZapatillas.editoUnaZapa(id, body)
  res.send({ status: 'OK', data: zapaEditada })
}

const borroUnaZapa = (req, res) => {
  const { params: { id } } = req
  if (!id) {
    return
  }
  servZapatillas.borroUnaZapa(id)
  res.status(204).send({ status: 'OK' })
}

module.exports = {
  getAllZapas,
  getUnaZapa,
  creoUnaZapa,
  editoUnaZapa,
  borroUnaZapa
}
