const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost:27017/soap_bdg", {
  useMongoClient: true
});
Mongoose.Promise = global.Promise;

const db = Mongoose.connection;

//validación de conexión de errores
db.on("error", console.error.bind(console, "Error de conexión"));
db.once("open", () => {
  console.log("Conexionn exitosa mongodb");
});

exports.db = db;
