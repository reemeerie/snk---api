const zapatillas = require("./zapatillas.json")
const utils  = require("./utils")
const { Sneaker } = require("./models/sneaker.js")



const getAllZapatillas = () => {

  /* CON DB */

  require('./connection.js')

  Sneaker.find({}).then(
    zapatillas => {
      console.log(zapatillas)
       return zapatillas
    }
  )


  /* SIN DB */
    /* return zapatillas; */
}

const crearZapatilla = (zapaNueva) => {
    const isAlreadyAdded = zapatillas.find((zapa) => zapa.nombre == zapaNueva.nombre)
    if (isAlreadyAdded) {
        return;
    }
    zapatillas.push(zapaNueva)
    utils.saveToDatabase(zapatillas)
    return zapaNueva
}

const getUnaZapa = (zapaId) => {
    const zapatilla = zapatillas.find((zapa) => zapa.id == zapaId);
    if (!zapatilla) {
      return;
    }
    return zapatilla;
};

const editoUnaZapa = (id, changes) => {
    const indexAActualizar = zapatillas.findIndex(
      (zapa) => zapa.id === id
    );
    if (indexAActualizar === -1) {
      return;
    }
    const zapaEditada = {
      ...zapatillas[indexAActualizar],
      ...changes
    };
    zapatillas[indexAActualizar] = zapaEditada;
    utils.saveToDatabase(zapatillas);
    return zapaEditada;
  };
  
  const borroUnaZapa = (id) => {
    const indexABorrar = zapatillas.findIndex(
      (zapa) => zapa.id === id
    );
    if (indexABorrar === -1) {
      return;
    }
    zapatillas.splice(indexABorrar, 1);
    utils.saveToDatabase(zapatillas);
  };

module.exports = {
    getAllZapatillas,
    crearZapatilla,
    getUnaZapa,
    editoUnaZapa,
    borroUnaZapa
}