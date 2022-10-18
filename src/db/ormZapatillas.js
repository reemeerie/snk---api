const { Sneaker } = require('./models/sneaker.js')

const getAllZapatillas = async () => {
  require('./connection.js')

  const zapatilla = await Sneaker.find({})

  console.log(zapatilla)

  return zapatilla
}

const crearZapatilla = async (zapaNueva) => {
  require('./connection.js')
  const zapatillaExiste = await Sneaker.find({ id: zapaNueva.id })

  if (zapatillaExiste.length > 0) {
    console.log('YA EXISTE LA ZAPA BRO')
    return zapatillaExiste
  }

  const zapaCreada = new Sneaker({
    id: zapaNueva.id,
    nombre: zapaNueva.nombre,
    marca: zapaNueva.marca,
    img: zapaNueva.img,
    precio: zapaNueva.precio,
    stock: zapaNueva.stock
  })

  console.log(zapaCreada)

  const zapatillaCreada = await zapaCreada.save()

  return zapatillaCreada
}

const getUnaZapa = async (zapaId) => {
  require('./connection.js')

  const zapatilla = await Sneaker.find({ id: zapaId })

  console.log(zapatilla)

  return zapatilla
}

const editoUnaZapa = async (zapaId, changes) => {
  require('./connection.js')

  const newZapa = { new: true }

  const zapatilla = await Sneaker.findOneAndUpdate({ id: zapaId }, changes, newZapa)

  if (zapatilla === null) {
    console.log('No existe esa zapatilla')
    return 'No existe esa zapatilla'
  } else {
    console.log(zapatilla)
    return zapatilla
  }
}

const borroUnaZapa = async (zapaId) => {
  require('./connection.js')

  const zapatilla = await Sneaker.find({ id: zapaId }).deleteOne()

  if (zapatilla.deletedCount > 0) {
    console.log('Zapatilla borrada')
    return { ...zapatilla, info: `Zapa con id ${zapaId} borrada` }
  } else {
    console.log('No existe esa zapatilla')
    return 'No existe esa zapatilla'
  }
}

module.exports = {
  getAllZapatillas,
  crearZapatilla,
  getUnaZapa,
  editoUnaZapa,
  borroUnaZapa
}
