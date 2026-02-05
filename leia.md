- Esse projeto foi criando para praticar e revisar o meu aprendizado!

- primeiro criei o arquivo de configução do projeto com o :
    npm init -y

- instalei o typescript em ambiente de desenvolvimento.
    npm install typescript --save-dev

- dei inicio no typescript com o
    npx tsc --init

- instalei o express e em dependecias externas os seu tipos em typescript :
    npm i express
    npm i -D @types/express

- criei uma pasta src e dentro dela criei dois arquivos: 
    server.ts para testar o express.
    routes.ts onde vão ficar as rotas.

- depois intalei o tsx para rodar os arquivos typescript:
    npm install tsx

- dentro do package.json dentro de script coloquei:
    "dev": "tsc watch src/serven.ts"

- Criei uma pasta chamada controllers dentro da pasta src

- Criei uma pasta chamada User dentro da pasta controllers

- Dei inicio com o prisma v6 no pojeto.
    npm i prisma@6 @prisma/client@6

- iniciando o prisma:
    npx prisma init

- Sempre que mudar o schema do prisma digite esse codigo:
    npx prisma generate

- Iniciando o YUP no projeto
    npm i yup

- instalei o bcrypt para criptografare as senhas
    npm i bcrypt
    npm install -D @types/bcrypt

- instalei o swegger para documentação:
    npm install swagger-ui-express
    


