# Testando retornos

> Teste comparativo de resultados da api na v1 com a v2. <br>
> Objetivo é validar e ajudar no refactor de uma api da v1 para a v2.

 <br>

# Material usado

Framework de Testes - [Jest](https://jestjs.io/pt-BR/docs/getting-started)

Lib para realizar as req async - [cross-fetch](https://www.npmjs.com/package/cross-fetch) <br>

Mock api json server - [my-json-server](https://my-json-server.typicode.com/) <br>

## Exemplo de mock

```
# Cria um db.json na raiz do repositorio
./testing-apis-results/db.json

# Depois consome nessa rota
https://my-json-server.typicode.com/martins86/testing-apis-results

# Posts
https://my-json-server.typicode.com/martins86/testing-apis-results/posts

```

 <br>

# Comandos

## Iniciando o Git

```
git init
```

## Iniciando o package.json

```
npm init -y
```

## Instalando e iniciando o Jest

```
npm install -g jest
npm install --save-dev jest @types/jest
npm install --save ts-node ts-jest typescript cross-fetch
jest --init
```
