const soap = require("soap");

module.exports = (request, reply) => {
  console.log("testHand");
  const url = request.payload.wsdl;
  const args = request.payload;

  soap.createClient(url, (err, client) => {
    if (err) {
      return reply(err);
    }
    return client[request.payload.nameMethod](args, (err2, result) => {
      if (err2) {
        return reply(err);
      }
      return reply(result);
    });
  });
};
