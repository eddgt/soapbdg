const Mongoose = require("mongoose");

Mongoose.connect("mongodb://127.0.0.1:27017", { useMongoClient: true });
Mongoose.Promise = global.Promise;

const db = Mongoose.connection;

//validación de conexión de errores
db.on("error", console.error.bind(console, "Error de conexión"));
db.once("open", () => {
  console.log("Conexionn exitosa mongodb");
});

exports.db = db;
