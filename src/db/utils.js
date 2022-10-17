const fs = require('fs')

const saveToDatabase = (DB) => {
  fs.writeFileSync('./src/database/zapatillas.json',
    JSON.stringify(DB),
    { encoding: 'utf-8' })
}

module.exports = { saveToDatabase }
