require("dotenv").config();

const hapi = require("hapi");
// Registro de routes en el server
const Routes = require("./routes/routes");

// importar redis
const hapiRedis = require("hapi-ioredis");

// plugins
const hapiPlugins = [];

const server = new hapi.Server();

// como llamar variables de ambiente
const serverPort = process.env[`PORT_${process.env.NODE_ENV.toUpperCase()}`];

console.log(`PORT_${process.env.NODE_ENV.toUpperCase()}`);
console.log(serverPort);
server.connection({ port: serverPort });

// ciclo de peticion
server.ext("onPreResponse", (request, reply) => {
  if (request.response != null && request.response.header != null) {
    request.response.header("Access-Control-Allow-Origin", "*");
    request.response.header(
      "Access-Control-Allow-Headers",
      "user-agent, Content-Type, Accept, token"
    );
    request.response.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE"
    );
  }
  reply.continue();
});

// registrar plugins de hapi
server.register(hapiPlugins, err => {
  if (err) throw err;

  // Levanto server
  server.start(error => {
    if (error) throw error;
    console.log(`Servidor levantado en: ${server.info.uri}`);
  });
});

// Defino ruta
server.route(Routes.rutas);

// exportar nuestro server
module.exports = server;
