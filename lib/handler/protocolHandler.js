const Protocol = require("../models/Transaction");

const objModule = {};

const findProtocol = protocol => {
  return new Promise((resolve, reject) => {
    //resolve es lo que devuelve en el then y reject es el catch
    Protocol.findOneAndUpdate(
      //buscar y actualizar
      { idTransaction: protocol.idTransaction },
      protocol,
      (err, resp) => {
        if (err) {
          return reject({
            err: 406,
            msg: "no se encontró la transacción"
          });
        }
        //si todo esta bien devolver mensaje exitoso
        return resolve({
          err: 200,
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
      newProtocol.save((err, protocol) => {
        if (err) {
          const objError = {
            err: 406,
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
/*
objModule.installProtocol = (request, reply) => {
  findProtocol(request.payload)
    .then(res => addProtocol(res, request.payload))
    .then(res2 => reply(res2))
    .catch(err => reply(err));
};
*/
module.exports = (request, reply) => {
  findProtocol(request.payload)
    .then(res => addProtocol(res, request.payload))
    .then(res2 => reply(res2))
    .catch(err => reply(err));
};
