FROM node:14 as builder

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

WORKDIR /app/frontend

COPY --from=builder /app/frontend/build ./build

EXPOSE 3000

CMD ["npm", "start"]
