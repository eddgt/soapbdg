const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;

const { describe, it, after } = lab;

const server = require('../../app');

const body = {
  par1: 'mi parametro 1',
  par2: 'mi parametro 2',
};

// *** para hacer pruebas unitarias debe haberse programado modularmente
// si programamos tod modularmente, en las pruebas no deberian haber problemas
describe('Primera prueba funcional', () => {
  // it indica inicio de mis pruebas
  it('Prueba POST /', (done) => {
    server.inject(
      {
        method: 'POST',
        url: '/',
        headers: {
          'Content-type': 'application/json',
        },
        payload: body,
      },
      (res) => {
        console.log(res.result);
        expect(res.result.parametros).to.be.exist();
        expect(res.result.parametros.par1).to.be.equal('mi parametro 1');
      },
    );
    done();
  });

  // siempre debe indicarse after de lo contrario el server se queda colgado
  // after indica que mis pruebas terminan aca
  after((done) => {
    done();
  });
});
