// creamos un modulo para exportarlo y consumirlo desde una ruta

const indexHand = require('./indexHand');

const postHand = require('./postHand');

// export para pruebas unitarias
const testF = (number1, number2) => number1 + number2;

module.exports = {
  indexHand,
  postHand,
  testF,
};
