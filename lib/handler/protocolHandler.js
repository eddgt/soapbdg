const Protocol = require("../models/Transaction");

const objModule = {};

const findProtocol = protocol => {
  return new Promise((resolve, reject) => {
    //resolve es lo que devuelve en el then y reject es el catch
    Protocol.findOneAndUpdate(
      { idTransaction: protocol.idTransaction },
      protocol,
      (err, resp) => {
        if (error) {
          return reject({
            error: 406,
            msg: "no se encontró la transacción"
          });
        }
        //si todoesta bien devolver mensaje exitoso
        return resolve({
          error: 200,
          msg: "Protocol encontrado"
        });
      }
    );
  });
};

const addProtocol = (objResponse, payload) => {
  new Promise((resolve, reject) => {
    //agregar protocolo nuevo
    ////////////////////////////////
    if (!objResponse.data) {
      const newProtocol = new Protocol(payload);
      newProtocol.save((error, protocol) => {
        if (error) {
          const objError = {
            error: 406,
            msg: "protocolo no agregado"
          };
          return reject(objError);
        }

        const resp = objResponse;
        resp.data = protocol;
        return resolve(resp);
      });
    }
    //////////////////////////////
    return resolve(objResponse);
  });
};

objModule.installProtocol = (request, reply) => {
  findProtocol(request.payload)
    .then(res => addProtocol(res, request.payload))
    .then(res2 => reply(res2))
    .catch(err => reply(err));
};

module.exports = objModule;
