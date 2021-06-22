## Commands [Yarn, Node]

#### Iniciar o yarn 

- -y: configurar o package.json com os valores defaults

``` bash 
yarn init -y
```

#### Instalar dependências 

- -D: apenas para desenvolvimento 

``` bash 
yarn add typescript -D
``` 

#### Criar configurações do TS

``` bash 
yarn tsc --init
```

#### Converter os arquivos TS para JS

``` bash 
yarn tsc
```

#### Rodar um arquivo com o node

``` bash 
node index.js
```

#### Para não precisar rodar o tsc toda vez e criar um script .js

``` bash 
yarn add ts-node-dev -D
```

É preciso adicionar no `package.json`: 

``` json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
}
```

#### Rodar todo o node após as configurações do TS-node-dev

``` bash 
yarn dev
```