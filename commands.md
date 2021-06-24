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

---

#### Instalar typeorm  

https://typeorm.io/

``` bash 
yarn add typeorm reflect-metadata sqlite3
```

Colocar no script dentro do package.json: 

``` json
"scripts": {
    ...
    "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
}
```

Para criar a pasta `migrations`: 

``` bash 
yarn typeorm migration:create -n CreateUsers
```

Cria a tabela (visualizar no Beekeeper)

``` bash
yarn typeorm migration:run 
```

Se precisar voltar para a última `migration`: 

``` bash
yarn typeorm migration:revert 
```

Criar a estrutura de `entities`

``` bash 
yarn typeorm entity:create -n User
```

Para criar ID automaticamente

``` bash 
yarn add uuid 
```

``` bash 
yarn add @types/uuid -D
```  

---

Usar async no express

``` bash 
yarn add express-async-errors
```  

---

#### Criar tags: 
``` bash 
yarn typeorm migration:create -n CreateTags
``` 

Rodar a migration

``` bash 
yarn typeorm migration:run
``` 

