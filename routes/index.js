const indexHand = require("./indexHand");
const postHand = require("./postHand");
const testHand = require("./testHand");
const protocolHandler = require("./protocolHandler");

const testF = (number1, number2) => number1 + number2;

module.exports = {
  indexHand,
  postHand,
  testF,
  testHand,
  protocolHandler
};
