import fetch from "cross-fetch";

const env = {
  endpoint: "RS/Porto Alegre/Domingos/json/",
  old: "http://viacep.com.br/ws",
  new: "http://viacep.com.br/ws",
};

const routeTest = {
  old: `${env.old}/${env.endpoint}`,
  new: `${env.new}/${env.endpoint}`,
};

let response = {
  old: null,
  new: null,
};

describe("Testando a rota com códigos postais de Porto Alegre - RS", () => {
  test("Deve retornar com sucesso 200 Api V1", async () => {
    response.new = await fetch(routeTest.new);

    expect(response.new.status).toBe(200);
    expect(response.new.statusText).toBe("OK");
  });

  test("Deve retornar com sucesso 200 Api V2", async () => {
    response.old = await fetch(routeTest.old);

    expect(response.old.status).toBe(200);
    expect(response.old.statusText).toBe("OK");
  });

  test("Deve ser o mesmo resultado pra V1 e V2", async () => {
    const bodyOld = await response.old.json();
    const bodyNew = await response.new.json();

    expect(bodyOld).toEqual(bodyNew);
  });
});
