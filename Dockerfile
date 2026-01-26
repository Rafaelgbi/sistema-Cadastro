FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia p resto do projeto
COPY . .

# Gera o Prisma Client
RUN npx prisma generate

# Expõe a porta da aplicação
EXPOSE 3000

# Comando para subir o servidor
CMD ["npm", "run", "dev"]

# Gera Prisma Client e sobe o servidor
CMD ["sh", "-c", "npx prisma generate && npm run dev"]