const soap = require("soap");
const Protocol = require("../models/Transaction");

module.exports = (request, reply) => {
  console.log("postHand peticion: ", request.payload);

  Protocol.findOne(
    { idTransaction: request.params.idService },
    (err, protocol) => {
      if (err) {
        return reply(err);
      } else if (!protocol) {
        return reply({
          err: 406,
          msg: "mongo trnasac no existe"
        });
      }
      return reply(protocol);

      /////////////////////////////////////////////////////////////
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
      ///////////////////////////////////////////////////////////
      //tare sustituir callbacks y usar soap as promises para el 13/06/18
    }
  );
};
