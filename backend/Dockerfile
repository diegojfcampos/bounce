FROM node:21

WORKDIR /app

COPY package.json .
COPY src /app/backend/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
