/**
 * Imports:
 * fetch: Usada para realizar as chamadas async.
 * variables: Arquivo com as variáveis reaproveitáveis.
 */
import fetch from "cross-fetch";
import variables from "../../shared/variables";

/**
 * Endpoint testado, deve ser igual para as 2 apis.
 */
const endpoint = "RS/Porto Alegre/Domingos/json/";


/**
 * Testando o retorno de uma rota get, com os códigos postais de uma cidade.
 * 
 * Primeiro teste: as duas rotas devem retornar com sucesso (code: 200 e msg: ok).
 * 
 * Segundo teste: as duas rotas devem ter retornado o mesmo resultado (um json com uma lista de cep´s).
 * 
 * Outros testes: as duas rotas get devem retornar os codes 403, 404 e 500.
 */


/**
 * Bloco de testes para Get de códigos postais.
 */
describe("Testando a rota com códigos postais de Porto Alegre - RS", () => {
  /**
   * Limpa os valores do response ao final de todos os testes deste grupo.
   */
  beforeAll(() => {
    variables.resetValues();
  });

  /**
   * Primeiro teste: a api antiga deve retornar com sucesso(code: 200 e msg: ok).
   */
  test("Deve retornar com sucesso 200 a Api V1(old)", async () => {
    // Act
    variables.response.old = await fetch(
      `${variables.routeTest.old}${endpoint}`
    );

    // Assert
    expect(variables.response.old.status).toBe(200);
    expect(variables.response.old.statusText).toBe("OK");
  });

  /**
   * Primeiro teste: a api nova deve retornar com sucesso(code: 200 e msg: ok).
   */
  test("Deve retornar com sucesso 200 a Api V2(new)", async () => {
    // Act
    variables.response.new = await fetch(
      `${variables.routeTest.new}${endpoint}`
    );

    // Assert
    expect(variables.response.new.status).toBe(200);
    expect(variables.response.new.statusText).toBe("OK");
  });

  /**
   * Segundo teste: as duas rotas devem retornar o mesmo resultado (um json com uma lista de cep´s).
   */
  test("Deve ser o mesmo resultado pra V1(old) e V2(new)", async () => {
    // Act
    const bodyOld = await variables.response.old.json();
    const bodyNew = await variables.response.new.json();

    // Assert
    expect(bodyOld).toEqual(bodyNew);

    expect(bodyOld[0].cep).toEqual(bodyNew[0].cep);
    expect(bodyOld[0].logradouro).toEqual(bodyNew[0].logradouro);
    expect(bodyOld[0].complemento).toEqual(bodyNew[0].complemento);
    expect(bodyOld[0].bairro).toEqual(bodyNew[0].bairro);
    expect(bodyOld[0].localidade).toEqual(bodyNew[0].localidade);
    expect(bodyOld[0].uf).toEqual(bodyNew[0].uf);
    expect(bodyOld[0].ibge).toEqual(bodyNew[0].ibge);
    expect(bodyOld[0].gia).toEqual(bodyNew[0].gia);
    expect(bodyOld[0].ddd).toEqual(bodyNew[0].ddd);
    expect(bodyOld[0].siafi).toEqual(bodyNew[0].siafi);
  });
});
