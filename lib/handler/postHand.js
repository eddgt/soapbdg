const RP = require("request-promise");

const requestToSever = (headers, payload, params, objRedis) => {
  payload.wsdl = objRedis.wsdl;
  const options = {
    method: objRedis.method,
    url: `http://${objRedis.ip}:${objRedis.port}/${params.idService}`,
    headers,
    body: payload,
    json: true
  };
  return RP(options);
};

module.exports = (request, reply) => {
  const parametro = request.payload;
  // return reply({ parametros });

  request.redis
    .hgetall(`endpoint${request.params.idService}:${process.env.NODE_ENV}`)
    .then(res =>
      requestToSever(request.headers, request.payload, request.parametro, res)
    ) //devuelve una promesa
    .then(res => reply(res))
    .catch(err => reply(err));
};
