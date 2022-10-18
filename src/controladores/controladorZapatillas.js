const servZapatillas = require('../servicios/servZapatillas')

const getAllZapas = async (req, res) => {
  try {
    const allZapas = await servZapatillas.getAllZapas()
    return res.json({ status: 'OK', data: allZapas })
  } catch (error) {
    console.error(error)
  }
}

const getUnaZapa = async (req, res) => {
  const { params: { id } } = req
  const newZapaId = Number(id)
  if (isNaN(newZapaId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }
  const zapa = await servZapatillas.getUnaZapa(id)
  res.send({ status: 'OK', data: zapa })
}

const creoUnaZapa = async (req, res) => {
  const request = req.body

  if (!request.id || !request.nombre || !request.marca || !request.img || !request.precio || !request.stock) {
    res.status(404).send({ warning: 'Faltan campos obligatorios' })
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

const editoUnaZapa = async (req, res) => {
  const changes = req.body
  const zapaId = req.params.id

  const newZapaId = Number(zapaId)

  if (isNaN(newZapaId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }
  const zapaEditada = await servZapatillas.editoUnaZapa(newZapaId, changes)
  res.send({ status: 'OK', data: zapaEditada })
}

const borroUnaZapa = async (req, res) => {
  const zapaId = req.params.id

  const newZapaId = Number(zapaId)

  if (isNaN(newZapaId)) {
    res.status(404).send({ warning: 'Tiene que ser un numero' })
    return
  }

  const zapaBorrada = await servZapatillas.borroUnaZapa(newZapaId)
  res.status(410).send({ status: 'OK', data: zapaBorrada })
}

module.exports = {
  getAllZapas,
  getUnaZapa,
  creoUnaZapa,
  editoUnaZapa,
  borroUnaZapa
}
