/* const zapatillas = require('./zapatillas.json')
const utils = require('./utils') */
const { Sneaker } = require('./models/sneaker.js')

const getAllZapatillas = async () => {
  /* CON DB */

  require('./connection.js')

  const zapatilla = await Sneaker.find({})

  console.log(zapatilla)

  return zapatilla

  /* SIN DB */

  /* return zapatillas; */
}

const crearZapatilla = async (zapaNueva) => {
  /* CON DB */

  const { id, nombre, marca, img, precio, stock } = zapaNueva

  require('./connection.js')

  const zapatillaExiste = await Sneaker.find({ id })

  if (zapatillaExiste) {
    return
  }

  const zapaCreada = new Sneaker({
    id,
    nombre,
    marca,
    img,
    precio,
    stock
  })

  const zapatillaCreada = await zapaCreada.save()

  return zapatillaCreada

  /* SIN DB */

  /* const isAlreadyAdded = zapatillas.find((zapa) => zapa.nombre === zapaNueva.nombre)
  if (isAlreadyAdded) {
    return
  }
  zapatillas.push(zapaNueva)
  utils.saveToDatabase(zapatillas)
  return zapaNueva */
}

const getUnaZapa = async (zapaId) => {
  /* Con DB */

  require('./connection.js')

  const zapatilla = await Sneaker.find({ id: zapaId })

  console.log(zapatilla)

  return zapatilla

  /* Sin DB */

  /* const zapatilla = zapatillas.find((zapa) => zapa.id === Number(zapaId))
  if (!zapatilla) {
    return
  }
  return zapatilla */
}

const editoUnaZapa = async (zapaId, changes) => {
  /* CON DB */

  require('./connection.js')

  const newZapa = { new: true }

  const zapatilla = await Sneaker.findByIdAndUpdate({ id: zapaId, updates: changes, options: newZapa })

  console.log(zapatilla)

  return zapatilla

  /* SIN DB */

  /* const indexAActualizar = zapatillas.findIndex(
    (zapa) => zapa.id === id
  )
  if (indexAActualizar === -1) {
    return
  }
  const zapaEditada = {
    ...zapatillas[indexAActualizar],
    ...changes
  }
  zapatillas[indexAActualizar] = zapaEditada
  utils.saveToDatabase(zapatillas)
  return zapaEditada */
}

const borroUnaZapa = async (zapaId) => {
  /* CON DB */

  require('./connection.js')

  const zapatilla = await Sneaker.findByIdAndDelete({ id: zapaId })

  console.log(zapatilla)

  return zapatilla
  /* SIN DB */

  /*   const indexABorrar = zapatillas.findIndex(
      (zapa) => zapa.id === id
    )
    if (indexABorrar === -1) {
      return
    }
    zapatillas.splice(indexABorrar, 1)
    utils.saveToDatabase(zapatillas) */
}

module.exports = {
  getAllZapatillas,
  crearZapatilla,
  getUnaZapa,
  editoUnaZapa,
  borroUnaZapa
}
