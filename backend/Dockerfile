FROM node:22-alpine AS build

WORKDIR /app/backend

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

EXPOSE 5005

CMD ["npm", "run", "prod"]