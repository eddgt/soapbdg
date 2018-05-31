const Code = require('code');

const Lab = require('lab');

const { expect } = Code;

const lab = Lab.script();

exports.lab = lab;

const { describe, it, after } = lab;

const test = require('../../lib/handler');

// *** para hacer pruebas unitarias debe haberse programado modularmente
// si programamos tod modularmente, en las pruebas no deberian haber problemas
describe('Primera prueba unitaria', () => {
  // it indica inicio de mis pruebas
  it('Suma de dos numeros', (done) => {
    const n1 = 9;
    const n2 = 5;
    const result = test.testF(n1, n2);

    expect(result).to.be.equal(n1 + n2);
    done();
  });

  it('Suma de dos numeros que no dan resultado igual a result ', (done) => {
    const n1 = 9;
    const n2 = 5;
    const result = test.testF(n1, n2);

    expect(result).not.to.be.equal(n1 + 9);
    done();
  });

  // siempre debe indicarse after de lo contrario el server se queda colgado
  // after indica que mis pruebas terminan aca
  after((done) => {
    done();
  });
});
