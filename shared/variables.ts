/**
 * Arquivo com as variaveis mais ultilizadas.
 * Parametros com a url da rota antiga e a nova.
 */
const env = {
  old: "http://viacep.com.br/ws",
  new: "http://viacep.com.br/ws",
};

/**
 * Parametros para url nos testes.
 */
let routeTest = {
  old: `${env.old}/`,
  new: `${env.new}/`,
};

/**
 * Parametros para o retorno nos testes.
 */
let response = {
  old: null,
  new: null,
};

/**
 * Função para limpar o retorno após o uso.
 */
const resetValues = () => {
  response = {
    old: null,
    new: null,
  };
};

export default { env, routeTest, response, resetValues };
