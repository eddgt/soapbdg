// importamos modulo handler creado en lib/handler
const Handlers = require("../lib/handler");

module.exports = {
  rutas: [
    {
      method: "GET",
      path: "/{idService}",
      config: {
        // handler: (request, reply) => reply({ data: 'Hola mundo' }),
        handler: Handlers.indexHand
      }
    },
    {
      method: "POST",
      path: "/{idService}",
      config: {
        handler: Handlers.postHand
      }
    }
  ]
};
