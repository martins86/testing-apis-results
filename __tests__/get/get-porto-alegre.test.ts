import fetch from "cross-fetch";
import variables from "../../shared/variables";

// endpoint para os testes
const endpoint = "RS/Porto Alegre/Domingos/json/";

// Testando o retorno de uma rota get com os códigos postais de uma cidade.
// primeiro teste: as duas rotas devem retornar com sucesso (code: 200 e msg: ok).
// segundo teste: as duas rotas devem ter retornado o mesmo resultado (um json com uma lista de cep´s).
// outros testes: as duas rotas get devem retornar os codes 403, 404 e 500.
describe("Testando a rota com códigos postais de Porto Alegre - RS", () => {
  // limpa os valores em response ao final de todos os testes deste grupo
  beforeAll(() => {
    variables.resetValues();
  });

  test("Deve retornar com sucesso 200 a Api V1(old)", async () => {
    // Act
    variables.response.old = await fetch(
      `${variables.routeTest.old}${endpoint}`
    );

    // Assert
    expect(variables.response.old.status).toBe(200);
    expect(variables.response.old.statusText).toBe("OK");
  });

  test("Deve retornar com sucesso 200 a Api V2(new)", async () => {
    // Act
    variables.response.new = await fetch(
      `${variables.routeTest.new}${endpoint}`
    );

    // Assert
    expect(variables.response.new.status).toBe(200);
    expect(variables.response.new.statusText).toBe("OK");
  });

  test("Deve ser o mesmo resultado pra V1(old) e V2(new)", async () => {
    // Act
    const bodyOld = await variables.response.old.json();
    const bodyNew = await variables.response.new.json();

    // Assert
    expect(bodyOld).toEqual(bodyNew);
  });
});
