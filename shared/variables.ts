const env = {
  old: "http://viacep.com.br/ws",
  new: "http://viacep.com.br/ws",
};

let routeTest = {
  old: `${env.old}/`,
  new: `${env.new}/`,
};

let response = {
  old: null,
  new: null,
};

const resetValues = () => {
  response = {
    old: null,
    new: null,
  };
};

export default { env, routeTest, response, resetValues };
