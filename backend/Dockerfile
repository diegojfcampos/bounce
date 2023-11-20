FROM node:14-alpine

WORKDIR /app/backend

# Copia todos os arquivos do diretório do projeto para o contêiner
COPY . .

# Instala as dependências
RUN npm install

EXPOSE 3002

CMD ["npm", "start"]
