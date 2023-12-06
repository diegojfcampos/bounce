# Build
FROM node:21-alpine AS builder

WORKDIR /app/frontend

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

# Production
FROM node:21-alpine

WORKDIR /app/frontend

COPY --from=builder /app/frontend/package*.json ./
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/public ./public 

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
