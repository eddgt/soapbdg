//definir esquema de mongo
const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const TransactionaSchema = new Schema({
  idTransaction: Number, //ejemplo 1=consulta de tipoCambioDia
  name: String,
  attributesIn: [
    {
      nameIn: String, //como se define el parametro en el app
      nameOut: String, //como se define en el soap wsdl o sea como lo recibe el wsdl
      path: String
    }
  ]
});

module.exports = Mongoose.model("Transaction", TransactionaSchema);
