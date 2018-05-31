module.exports = (request, reply) => {
  const message = "Hola desde modulo index";
  // return reply({ res });

  // Paso 1 Access the ioRedis instance
  const client = request.redis; // also available via request.server.app.redis

  // Paso 2 usando callback
  /*
  client.get('key1', (err, data) => {
    if (err) return reply(err);
    return reply(data);
  }); */

  // Paso 2 utilizando promesas
  client
    .hgetall(`endpoint${request.params.idService}:${process.env.NODE_ENV}`)
    .then(res => reply(res))
    .catch(err => reply(err));
};
