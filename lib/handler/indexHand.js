module.exports = (request, reply) => {
  const message = "Hola desde modulo index";
  return reply({ data: message });
};
