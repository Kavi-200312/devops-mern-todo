FROM node:24 AS build

WORKDIR /app/backend

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 5005

CMD ["npm", "run", "prod"]