const soap = require("soap");

module.exports = (request, reply) => {
  console.log("peticion: ", request.payload);
  const url = request.payload.wsdl;
  const args = {};
  soap.createClient(url, (err, client) => {
    if (err) {
      return reply(err);
    }
    return client.TipoCambioDia(args, (err2, result) => {
      if (err2) {
        return reply(err);
      }
      return reply(result);
    });
  });
};
