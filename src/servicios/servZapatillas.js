const ormZapatillas = require("../db/ormZapatillas")

const getAllZapas = () => {
    const allZapatillas = ormZapatillas.getAllZapatillas()
    return allZapatillas
}

const getUnaZapa = (id) => {
    const zapa = ormZapatillas.getUnaZapa(id);
    return zapa;
}

const creoUnaZapa = (nuevaZapa) => {
    const zapaCreada = ormZapatillas.crearZapatilla(nuevaZapa)
    return zapaCreada
}

const editoUnaZapa = (id, changes) => {
    const zapaEditada = ormZapatillas.editoUnaZapa(id, changes);
    return zapaEditada;
}

const borroUnaZapa = (id) => {
    ormZapatillas.borroUnaZapa(id);
}

module.exports = {
    getAllZapas,
    getUnaZapa,
    creoUnaZapa,
    editoUnaZapa,
    borroUnaZapa
}